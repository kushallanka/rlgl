# ============================================
# Project Variables
# ============================================

variable "project_name" {
  type        = string
  default     = "test-management"
  description = "Project name"
}

variable "environment" {
  type        = string
  default     = "staging"
  description = "Environment name (development, staging, production)"
}

variable "aws_region" {
  type        = string
  default     = "us-east-1"
  description = "AWS region"
}

# ============================================
# VPC & Networking Variables
# ============================================

variable "vpc_cidr" {
  type        = string
  default     = "10.0.0.0/16"
  description = "VPC CIDR block"
}

variable "enable_nat_gateway" {
  type        = bool
  default     = true
  description = "Enable NAT Gateway for private subnets"
}

# ============================================
# RDS Variables
# ============================================

variable "rds_instance_class" {
  type        = string
  default     = "db.t4g.micro"
  description = "RDS instance class (t4g.micro for dev, t4g.small+ for prod)"
}

variable "rds_allocated_storage" {
  type        = number
  default     = 20
  description = "RDS allocated storage in GB"
}

variable "rds_backup_retention" {
  type        = number
  default     = 7
  description = "RDS backup retention period in days"
}

variable "rds_multi_az" {
  type        = bool
  default     = false
  description = "Enable RDS Multi-AZ (true for production)"
}

variable "rds_db_name" {
  type        = string
  default     = "testmanagement"
  description = "RDS database name"
}

variable "rds_username" {
  type        = string
  sensitive   = true
  description = "RDS master username"
}

variable "rds_password" {
  type        = string
  sensitive   = true
  description = "RDS master password (at least 8 characters)"
}

# ============================================
# ECS Variables
# ============================================

variable "ecs_task_cpu" {
  type        = string
  default     = "256"
  description = "ECS task CPU (256, 512, 1024, 2048, 4096)"
}

variable "ecs_task_memory" {
  type        = string
  default     = "512"
  description = "ECS task memory (512, 1024, 2048, 3072, 4096, 5120, 6144, 7168, 8192)"
}

variable "ecs_desired_count" {
  type        = number
  default     = 2
  description = "Desired number of tasks per service"
}

variable "ecs_deployment_minimum_percent" {
  type        = number
  default     = 100
  description = "Minimum percent of tasks to keep running during deployment"
}

variable "ecs_deployment_maximum_percent" {
  type        = number
  default     = 200
  description = "Maximum percent of tasks allowed during deployment"
}

# ============================================
# Container Image Variables
# ============================================

variable "docker_image_tag" {
  type        = string
  default     = "latest"
  description = "Docker image tag"
}

variable "ecr_repository_urls" {
  type = map(string)
  default = {
    auth     = ""
    project  = ""
    testcase = ""
    testrun  = ""
    frontend = ""
  }
  description = "ECR repository URLs for images (will be set by ECR module)"
}

# ============================================
# Scaling Variables
# ============================================

variable "autoscaling_min_capacity" {
  type        = number
  default     = 1
  description = "Minimum number of tasks"
}

variable "autoscaling_max_capacity" {
  type        = number
  default     = 4
  description = "Maximum number of tasks"
}

variable "autoscaling_target_cpu" {
  type        = number
  default     = 70
  description = "Target CPU percentage for auto-scaling"
}

variable "autoscaling_target_memory" {
  type        = number
  default     = 80
  description = "Target memory percentage for auto-scaling"
}

# ============================================
# Security Variables
# ============================================

variable "enable_https" {
  type        = bool
  default     = false
  description = "Enable HTTPS (requires ACM certificate)"
}

variable "acm_certificate_arn" {
  type        = string
  default     = ""
  description = "ACM certificate ARN for HTTPS"
}

variable "cors_origin" {
  type        = string
  default     = "https://app.example.com"
  description = "CORS origin for frontend"
}
