# ============================================
# CloudWatch Log Group
# ============================================

resource "aws_cloudwatch_log_group" "main" {
  name              = "/ecs/${var.project_name}"
  retention_in_days = 7

  tags = {
    Name = "${var.project_name}-log-group"
  }
}

# ============================================
# ECR Repositories
# ============================================

resource "aws_ecr_repository" "auth" {
  name                 = "${var.project_name}/auth"
  image_tag_mutability = "MUTABLE"

  image_scanning_configuration {
    scan_on_push = true
  }

  tags = {
    Name = "${var.project_name}-auth-ecr"
  }
}

resource "aws_ecr_repository" "project" {
  name                 = "${var.project_name}/project"
  image_tag_mutability = "MUTABLE"

  image_scanning_configuration {
    scan_on_push = true
  }

  tags = {
    Name = "${var.project_name}-project-ecr"
  }
}

resource "aws_ecr_repository" "testcase" {
  name                 = "${var.project_name}/testcase"
  image_tag_mutability = "MUTABLE"

  image_scanning_configuration {
    scan_on_push = true
  }

  tags = {
    Name = "${var.project_name}-testcase-ecr"
  }
}

resource "aws_ecr_repository" "testrun" {
  name                 = "${var.project_name}/testrun"
  image_tag_mutability = "MUTABLE"

  image_scanning_configuration {
    scan_on_push = true
  }

  tags = {
    Name = "${var.project_name}-testrun-ecr"
  }
}

resource "aws_ecr_repository" "frontend" {
  name                 = "${var.project_name}/frontend"
  image_tag_mutability = "MUTABLE"

  image_scanning_configuration {
    scan_on_push = true
  }

  tags = {
    Name = "${var.project_name}-frontend-ecr"
  }
}

# ============================================
# ECS Cluster
# ============================================

resource "aws_ecs_cluster" "main" {
  name = "${var.project_name}-cluster"

  setting {
    name  = "containerInsights"
    value = "enabled"
  }

  tags = {
    Name = "${var.project_name}-cluster"
  }
}

resource "aws_ecs_cluster_capacity_providers" "main" {
  cluster_name = aws_ecs_cluster.main.name

  capacity_providers = ["FARGATE", "FARGATE_SPOT"]

  default_capacity_provider_strategy {
    base              = 1
    weight            = 100
    capacity_provider = "FARGATE"
  }
}

# ============================================
# Task Execution Role
# ============================================

resource "aws_iam_role" "ecs_task_execution_role" {
  name = "${var.project_name}-ecs-task-execution-role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = "sts:AssumeRole"
        Effect = "Allow"
        Principal = {
          Service = "ecs-tasks.amazonaws.com"
        }
      }
    ]
  })
}

resource "aws_iam_role_policy_attachment" "ecs_task_execution_role_policy" {
  role       = aws_iam_role.ecs_task_execution_role.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AmazonECSTaskExecutionRolePolicy"
}

# ============================================
# Task Role
# ============================================

resource "aws_iam_role" "ecs_task_role" {
  name = "${var.project_name}-ecs-task-role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = "sts:AssumeRole"
        Effect = "Allow"
        Principal = {
          Service = "ecs-tasks.amazonaws.com"
        }
      }
    ]
  })
}

# Policy for task to access Secrets Manager
resource "aws_iam_role_policy" "ecs_task_secrets" {
  name   = "${var.project_name}-ecs-task-secrets"
  role   = aws_iam_role.ecs_task_role.id
  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Action = [
          "secretsmanager:GetSecretValue",
          "secretsmanager:DescribeSecret"
        ]
        Resource = "arn:aws:secretsmanager:${data.aws_region.current.name}:${data.aws_caller_identity.current.account_id}:secret:${var.project_name}-*"
      }
    ]
  })
}

# ============================================
# Auth Service Task Definition
# ============================================

resource "aws_ecs_task_definition" "auth" {
  family                   = "${var.project_name}-auth"
  network_mode             = "awsvpc"
  requires_compatibilities = ["FARGATE"]
  cpu                      = var.ecs_task_cpu
  memory                   = var.ecs_task_memory
  execution_role_arn       = aws_iam_role.ecs_task_execution_role.arn
  task_role_arn            = aws_iam_role.ecs_task_role.arn

  container_definitions = jsonencode([
    {
      name      = "${var.project_name}-auth"
      image     = "${aws_ecr_repository.auth.repository_url}:${var.docker_image_tag}"
      essential = true
      portMappings = [
        {
          containerPort = 3001
          hostPort      = 3001
          protocol      = "tcp"
        }
      ]
      environment = [
        {
          name  = "NODE_ENV"
          value = var.environment
        },
        {
          name  = "PORT"
          value = "3001"
        }
      ]
      secrets = [
        {
          name      = "JWT_SECRET"
          valueFrom = "${aws_secretsmanager_secret.jwt_secret.arn}:JWT_SECRET::"
        }
      ]
      logConfiguration = {
        logDriver = "awslogs"
        options = {
          "awslogs-group"         = aws_cloudwatch_log_group.main.name
          "awslogs-region"        = data.aws_region.current.name
          "awslogs-stream-prefix" = "auth"
        }
      }
    }
  ])

  tags = {
    Name = "${var.project_name}-auth-task"
  }
}

# ============================================
# Project Service Task Definition
# ============================================

resource "aws_ecs_task_definition" "project" {
  family                   = "${var.project_name}-project"
  network_mode             = "awsvpc"
  requires_compatibilities = ["FARGATE"]
  cpu                      = var.ecs_task_cpu
  memory                   = var.ecs_task_memory
  execution_role_arn       = aws_iam_role.ecs_task_execution_role.arn
  task_role_arn            = aws_iam_role.ecs_task_role.arn

  container_definitions = jsonencode([
    {
      name      = "${var.project_name}-project"
      image     = "${aws_ecr_repository.project.repository_url}:${var.docker_image_tag}"
      essential = true
      portMappings = [
        {
          containerPort = 3002
          hostPort      = 3002
          protocol      = "tcp"
        }
      ]
      environment = [
        {
          name  = "NODE_ENV"
          value = var.environment
        },
        {
          name  = "PORT"
          value = "3002"
        }
      ]
      logConfiguration = {
        logDriver = "awslogs"
        options = {
          "awslogs-group"         = aws_cloudwatch_log_group.main.name
          "awslogs-region"        = data.aws_region.current.name
          "awslogs-stream-prefix" = "project"
        }
      }
    }
  ])

  tags = {
    Name = "${var.project_name}-project-task"
  }
}

# ============================================
# TestCase Service Task Definition
# ============================================

resource "aws_ecs_task_definition" "testcase" {
  family                   = "${var.project_name}-testcase"
  network_mode             = "awsvpc"
  requires_compatibilities = ["FARGATE"]
  cpu                      = var.ecs_task_cpu
  memory                   = var.ecs_task_memory
  execution_role_arn       = aws_iam_role.ecs_task_execution_role.arn
  task_role_arn            = aws_iam_role.ecs_task_role.arn

  container_definitions = jsonencode([
    {
      name      = "${var.project_name}-testcase"
      image     = "${aws_ecr_repository.testcase.repository_url}:${var.docker_image_tag}"
      essential = true
      portMappings = [
        {
          containerPort = 3003
          hostPort      = 3003
          protocol      = "tcp"
        }
      ]
      environment = [
        {
          name  = "NODE_ENV"
          value = var.environment
        },
        {
          name  = "PORT"
          value = "3003"
        }
      ]
      logConfiguration = {
        logDriver = "awslogs"
        options = {
          "awslogs-group"         = aws_cloudwatch_log_group.main.name
          "awslogs-region"        = data.aws_region.current.name
          "awslogs-stream-prefix" = "testcase"
        }
      }
    }
  ])

  tags = {
    Name = "${var.project_name}-testcase-task"
  }
}

# ============================================
# TestRun Service Task Definition
# ============================================

resource "aws_ecs_task_definition" "testrun" {
  family                   = "${var.project_name}-testrun"
  network_mode             = "awsvpc"
  requires_compatibilities = ["FARGATE"]
  cpu                      = var.ecs_task_cpu
  memory                   = var.ecs_task_memory
  execution_role_arn       = aws_iam_role.ecs_task_execution_role.arn
  task_role_arn            = aws_iam_role.ecs_task_role.arn

  container_definitions = jsonencode([
    {
      name      = "${var.project_name}-testrun"
      image     = "${aws_ecr_repository.testrun.repository_url}:${var.docker_image_tag}"
      essential = true
      portMappings = [
        {
          containerPort = 3004
          hostPort      = 3004
          protocol      = "tcp"
        }
      ]
      environment = [
        {
          name  = "NODE_ENV"
          value = var.environment
        },
        {
          name  = "PORT"
          value = "3004"
        }
      ]
      logConfiguration = {
        logDriver = "awslogs"
        options = {
          "awslogs-group"         = aws_cloudwatch_log_group.main.name
          "awslogs-region"        = data.aws_region.current.name
          "awslogs-stream-prefix" = "testrun"
        }
      }
    }
  ])

  tags = {
    Name = "${var.project_name}-testrun-task"
  }
}

# ============================================
# Gateway/Frontend Task Definition
# ============================================

resource "aws_ecs_task_definition" "gateway" {
  family                   = "${var.project_name}-gateway"
  network_mode             = "awsvpc"
  requires_compatibilities = ["FARGATE"]
  cpu                      = var.ecs_task_cpu
  memory                   = var.ecs_task_memory
  execution_role_arn       = aws_iam_role.ecs_task_execution_role.arn
  task_role_arn            = aws_iam_role.ecs_task_role.arn

  container_definitions = jsonencode([
    {
      name      = "${var.project_name}-gateway"
      image     = "${aws_ecr_repository.frontend.repository_url}:${var.docker_image_tag}"
      essential = true
      portMappings = [
        {
          containerPort = 3000
          hostPort      = 3000
          protocol      = "tcp"
        }
      ]
      environment = [
        {
          name  = "NODE_ENV"
          value = var.environment
        },
        {
          name  = "PORT"
          value = "3000"
        },
        {
          name  = "AUTH_SERVICE_URL"
          value = "http://auth-service:3001"
        },
        {
          name  = "PROJECT_SERVICE_URL"
          value = "http://project-service:3002"
        },
        {
          name  = "TESTCASE_SERVICE_URL"
          value = "http://testcase-service:3003"
        },
        {
          name  = "TESTRUN_SERVICE_URL"
          value = "http://testrun-service:3004"
        },
        {
          name  = "CORS_ORIGIN"
          value = var.cors_origin
        }
      ]
      logConfiguration = {
        logDriver = "awslogs"
        options = {
          "awslogs-group"         = aws_cloudwatch_log_group.main.name
          "awslogs-region"        = data.aws_region.current.name
          "awslogs-stream-prefix" = "gateway"
        }
      }
    }
  ])

  tags = {
    Name = "${var.project_name}-gateway-task"
  }
}

# ============================================
# ECS Services
# ============================================

resource "aws_ecs_service" "gateway" {
  name            = "${var.project_name}-gateway-service"
  cluster         = aws_ecs_cluster.main.id
  task_definition = aws_ecs_task_definition.gateway.arn
  desired_count   = var.ecs_desired_count
  launch_type     = "FARGATE"

  network_configuration {
    subnets          = aws_subnet.private[*].id
    security_groups  = [aws_security_group.ecs_tasks.id]
    assign_public_ip = false
  }

  load_balancer {
    target_group_arn = aws_lb_target_group.gateway.arn
    container_name   = "${var.project_name}-gateway"
    container_port   = 3000
  }

  deployment_configuration {
    maximum_percent         = var.ecs_deployment_maximum_percent
    minimum_healthy_percent = var.ecs_deployment_minimum_percent
  }

  tags = {
    Name = "${var.project_name}-gateway-service"
  }

  depends_on = [aws_lb_listener.main]
}

resource "aws_ecs_service" "auth" {
  name            = "${var.project_name}-auth-service"
  cluster         = aws_ecs_cluster.main.id
  task_definition = aws_ecs_task_definition.auth.arn
  desired_count   = var.ecs_desired_count
  launch_type     = "FARGATE"

  network_configuration {
    subnets          = aws_subnet.private[*].id
    security_groups  = [aws_security_group.ecs_tasks.id]
    assign_public_ip = false
  }

  load_balancer {
    target_group_arn = aws_lb_target_group.auth.arn
    container_name   = "${var.project_name}-auth"
    container_port   = 3001
  }

  deployment_configuration {
    maximum_percent         = var.ecs_deployment_maximum_percent
    minimum_healthy_percent = var.ecs_deployment_minimum_percent
  }

  tags = {
    Name = "${var.project_name}-auth-service"
  }

  depends_on = [aws_lb_listener.main]
}

resource "aws_ecs_service" "project" {
  name            = "${var.project_name}-project-service"
  cluster         = aws_ecs_cluster.main.id
  task_definition = aws_ecs_task_definition.project.arn
  desired_count   = var.ecs_desired_count
  launch_type     = "FARGATE"

  network_configuration {
    subnets          = aws_subnet.private[*].id
    security_groups  = [aws_security_group.ecs_tasks.id]
    assign_public_ip = false
  }

  load_balancer {
    target_group_arn = aws_lb_target_group.project.arn
    container_name   = "${var.project_name}-project"
    container_port   = 3002
  }

  deployment_configuration {
    maximum_percent         = var.ecs_deployment_maximum_percent
    minimum_healthy_percent = var.ecs_deployment_minimum_percent
  }

  tags = {
    Name = "${var.project_name}-project-service"
  }

  depends_on = [aws_lb_listener.main]
}

resource "aws_ecs_service" "testcase" {
  name            = "${var.project_name}-testcase-service"
  cluster         = aws_ecs_cluster.main.id
  task_definition = aws_ecs_task_definition.testcase.arn
  desired_count   = var.ecs_desired_count
  launch_type     = "FARGATE"

  network_configuration {
    subnets          = aws_subnet.private[*].id
    security_groups  = [aws_security_group.ecs_tasks.id]
    assign_public_ip = false
  }

  load_balancer {
    target_group_arn = aws_lb_target_group.testcase.arn
    container_name   = "${var.project_name}-testcase"
    container_port   = 3003
  }

  deployment_configuration {
    maximum_percent         = var.ecs_deployment_maximum_percent
    minimum_healthy_percent = var.ecs_deployment_minimum_percent
  }

  tags = {
    Name = "${var.project_name}-testcase-service"
  }

  depends_on = [aws_lb_listener.main]
}

resource "aws_ecs_service" "testrun" {
  name            = "${var.project_name}-testrun-service"
  cluster         = aws_ecs_cluster.main.id
  task_definition = aws_ecs_task_definition.testrun.arn
  desired_count   = var.ecs_desired_count
  launch_type     = "FARGATE"

  network_configuration {
    subnets          = aws_subnet.private[*].id
    security_groups  = [aws_security_group.ecs_tasks.id]
    assign_public_ip = false
  }

  load_balancer {
    target_group_arn = aws_lb_target_group.testrun.arn
    container_name   = "${var.project_name}-testrun"
    container_port   = 3004
  }

  deployment_configuration {
    maximum_percent         = var.ecs_deployment_maximum_percent
    minimum_healthy_percent = var.ecs_deployment_minimum_percent
  }

  tags = {
    Name = "${var.project_name}-testrun-service"
  }

  depends_on = [aws_lb_listener.main]
}

# ============================================
# Data Sources for Current Account/Region
# ============================================

data "aws_caller_identity" "current" {}
data "aws_region" "current" {}

# ============================================
# JWT Secret in Secrets Manager
# ============================================

resource "aws_secretsmanager_secret" "jwt_secret" {
  name_prefix             = "${var.project_name}-jwt-"
  recovery_window_in_days = 7

  tags = {
    Name = "${var.project_name}-jwt-secret"
  }
}

resource "aws_secretsmanager_secret_version" "jwt_secret" {
  secret_id     = aws_secretsmanager_secret.jwt_secret.id
  secret_string = jsonencode({
    JWT_SECRET = "change-me-in-production-${formatdate("YYYY-MM-DD", timestamp())}"
  })
}
