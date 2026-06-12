#!/bin/bash
# Runs automatically inside LocalStack once all services are ready.
# Creates every AWS resource the application uses in production.

set -euo pipefail

REGION="us-east-1"
ACCOUNT="000000000000"

echo "==> LocalStack: bootstrapping AWS resources..."

# ─── S3 ──────────────────────────────────────────────────────────────────────
echo "--> S3: creating backup bucket..."
awslocal s3 mb s3://test-management-backups --region "$REGION"
awslocal s3api put-bucket-versioning \
  --bucket test-management-backups \
  --versioning-configuration Status=Enabled

# ─── Secrets Manager ─────────────────────────────────────────────────────────
echo "--> Secrets Manager: storing secrets..."

JWT_SECRET="${JWT_SECRET:-localstack-jwt-secret-change-in-prod}"

awslocal secretsmanager create-secret \
  --name "test-management/jwt-secret" \
  --description "JWT signing secret" \
  --secret-string "$JWT_SECRET" \
  --region "$REGION"

awslocal secretsmanager create-secret \
  --name "test-management/db/auth" \
  --description "Auth service database URL" \
  --secret-string "postgresql://testmgmt:testmgmt_local@postgres:5432/auth_db" \
  --region "$REGION"

awslocal secretsmanager create-secret \
  --name "test-management/db/project" \
  --description "Project service database URL" \
  --secret-string "postgresql://testmgmt:testmgmt_local@postgres:5432/project_db" \
  --region "$REGION"

awslocal secretsmanager create-secret \
  --name "test-management/db/testcase" \
  --description "TestCase service database URL" \
  --secret-string "postgresql://testmgmt:testmgmt_local@postgres:5432/testcase_db" \
  --region "$REGION"

awslocal secretsmanager create-secret \
  --name "test-management/db/testrun" \
  --description "TestRun service database URL" \
  --secret-string "postgresql://testmgmt:testmgmt_local@postgres:5432/testrun_db" \
  --region "$REGION"

# ─── CloudWatch Log Groups ────────────────────────────────────────────────────
echo "--> CloudWatch: creating log groups..."

for SERVICE in gateway auth project testcase testrun worker; do
  awslocal logs create-log-group \
    --log-group-name "/ecs/test-management/${SERVICE}" \
    --region "$REGION"
  awslocal logs put-retention-policy \
    --log-group-name "/ecs/test-management/${SERVICE}" \
    --retention-in-days 7 \
    --region "$REGION"
done

# ─── IAM ─────────────────────────────────────────────────────────────────────
echo "--> IAM: creating ECS task role..."

awslocal iam create-role \
  --role-name "test-management-task-role" \
  --assume-role-policy-document '{
    "Version":"2012-10-17",
    "Statement":[{
      "Effect":"Allow",
      "Principal":{"Service":"ecs-tasks.amazonaws.com"},
      "Action":"sts:AssumeRole"
    }]
  }' \
  --region "$REGION" || true  # ignore if already exists

awslocal iam put-role-policy \
  --role-name "test-management-task-role" \
  --policy-name "secrets-access" \
  --policy-document '{
    "Version":"2012-10-17",
    "Statement":[{
      "Effect":"Allow",
      "Action":["secretsmanager:GetSecretValue","secretsmanager:DescribeSecret"],
      "Resource":"arn:aws:secretsmanager:*:*:secret:test-management-*"
    }]
  }' \
  --region "$REGION" || true

echo ""
echo "==> LocalStack bootstrap complete."
echo "    S3 bucket:        s3://test-management-backups"
echo "    Secrets Manager:  test-management/jwt-secret, test-management/db/*"
echo "    CloudWatch logs:  /ecs/test-management/{gateway,auth,project,testcase,testrun,worker}"
echo "    IAM role:         test-management-task-role"
echo ""
echo "    Verify: awslocal s3 ls"
echo "    Verify: awslocal secretsmanager list-secrets"
echo "    Verify: awslocal logs describe-log-groups"
