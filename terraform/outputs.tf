# ============================================
# Outputs
# ============================================

output "alb_dns_name" {
  description = "DNS name of the load balancer"
  value       = aws_lb.main.dns_name
}

output "ecs_cluster_name" {
  description = "ECS cluster name"
  value       = aws_ecs_cluster.main.name
}

output "rds_endpoint" {
  description = "RDS database endpoint"
  value       = aws_db_instance.main.endpoint
}

output "rds_address" {
  description = "RDS database address (hostname only)"
  value       = aws_db_instance.main.address
}

output "ecr_auth_repository_url" {
  description = "ECR repository URL for auth service"
  value       = aws_ecr_repository.auth.repository_url
}

output "ecr_project_repository_url" {
  description = "ECR repository URL for project service"
  value       = aws_ecr_repository.project.repository_url
}

output "ecr_testcase_repository_url" {
  description = "ECR repository URL for testcase service"
  value       = aws_ecr_repository.testcase.repository_url
}

output "ecr_testrun_repository_url" {
  description = "ECR repository URL for testrun service"
  value       = aws_ecr_repository.testrun.repository_url
}

output "ecr_frontend_repository_url" {
  description = "ECR repository URL for frontend"
  value       = aws_ecr_repository.frontend.repository_url
}

output "cloudwatch_log_group" {
  description = "CloudWatch log group name"
  value       = aws_cloudwatch_log_group.main.name
}

output "vpc_id" {
  description = "VPC ID"
  value       = aws_vpc.main.id
}

output "private_subnets" {
  description = "Private subnet IDs"
  value       = aws_subnet.private[*].id
}

output "public_subnets" {
  description = "Public subnet IDs"
  value       = aws_subnet.public[*].id
}

output "access_url" {
  description = "Application access URL"
  value       = "http://${aws_lb.main.dns_name}"
}
