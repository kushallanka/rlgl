# Staging Environment Variables
project_name           = "test-management"
environment            = "staging"
aws_region             = "us-east-1"

# Networking
vpc_cidr              = "10.0.0.0/16"
enable_nat_gateway    = true

# RDS Configuration
rds_instance_class    = "db.t4g.micro"
rds_allocated_storage = 20
rds_backup_retention  = 7
rds_multi_az          = false
rds_db_name           = "testmanagement"

# ECS Configuration
ecs_task_cpu                    = "256"
ecs_task_memory                 = "512"
ecs_desired_count               = 2
ecs_deployment_minimum_percent  = 100
ecs_deployment_maximum_percent  = 200

# Container Images
docker_image_tag = "latest"

# Auto-scaling
autoscaling_min_capacity = 1
autoscaling_max_capacity = 3
autoscaling_target_cpu   = 70
autoscaling_target_memory = 80

# Security
enable_https = false
cors_origin  = "https://staging.example.com"
