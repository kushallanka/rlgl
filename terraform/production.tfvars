# Production Environment Variables
project_name           = "test-management"
environment            = "production"
aws_region             = "us-east-1"

# Networking
vpc_cidr              = "10.0.0.0/16"
enable_nat_gateway    = true

# RDS Configuration (Multi-AZ for production)
rds_instance_class    = "db.t4g.small"
rds_allocated_storage = 100
rds_backup_retention  = 30
rds_multi_az          = true
rds_db_name           = "testmanagement"

# ECS Configuration
ecs_task_cpu                    = "512"
ecs_task_memory                 = "1024"
ecs_desired_count               = 3
ecs_deployment_minimum_percent  = 100
ecs_deployment_maximum_percent  = 200

# Container Images
docker_image_tag = "v1.0.0"  # Use semantic versioning in production

# Auto-scaling
autoscaling_min_capacity = 2
autoscaling_max_capacity = 10
autoscaling_target_cpu   = 70
autoscaling_target_memory = 80

# Security
enable_https = true
cors_origin  = "https://app.example.com"
