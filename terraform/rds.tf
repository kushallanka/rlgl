# ============================================
# Security Group - RDS
# ============================================

resource "aws_security_group" "rds" {
  name        = "${var.project_name}-rds-sg"
  description = "Security group for RDS database"
  vpc_id      = aws_vpc.main.id

  ingress {
    from_port       = 5432
    to_port         = 5432
    protocol        = "tcp"
    security_groups = [aws_security_group.ecs_tasks.id]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "${var.project_name}-rds-sg"
  }
}

# ============================================
# DB Subnet Group
# ============================================

resource "aws_db_subnet_group" "main" {
  name       = "${var.project_name}-db-subnet-group"
  subnet_ids = aws_subnet.private[*].id

  tags = {
    Name = "${var.project_name}-db-subnet-group"
  }
}

# ============================================
# RDS PostgreSQL Instance
# ============================================

resource "aws_db_instance" "main" {
  identifier            = "${var.project_name}-db"
  engine                = "postgres"
  engine_version        = "15.4"
  instance_class        = var.rds_instance_class
  allocated_storage     = var.rds_allocated_storage
  storage_encrypted     = true
  multi_az              = var.rds_multi_az
  db_name               = var.rds_db_name
  username              = var.rds_username
  password              = var.rds_password
  parameter_group_name  = aws_db_parameter_group.main.name
  db_subnet_group_name  = aws_db_subnet_group.main.name
  vpc_security_group_ids = [aws_security_group.rds.id]

  backup_retention_period = var.rds_backup_retention
  backup_window           = "03:00-04:00"
  maintenance_window      = "mon:04:00-mon:05:00"
  
  publicly_accessible = false
  skip_final_snapshot = var.environment != "production"
  
  # Snapshot configuration for production
  final_snapshot_identifier = var.environment == "production" ? "${var.project_name}-db-final-${formatdate("YYYY-MM-DD-hhmm", timestamp())}" : null

  tags = {
    Name = "${var.project_name}-db"
  }

  depends_on = [aws_db_subnet_group.main]
}

# ============================================
# RDS Parameter Group
# ============================================

resource "aws_db_parameter_group" "main" {
  name   = "${var.project_name}-db-params"
  family = "postgres15"

  parameter {
    name  = "log_connections"
    value = "1"
  }

  parameter {
    name  = "log_disconnections"
    value = "1"
  }

  tags = {
    Name = "${var.project_name}-db-params"
  }
}

# ============================================
# Secrets Manager for Database Credentials
# ============================================

resource "aws_secretsmanager_secret" "rds_credentials" {
  name_prefix             = "${var.project_name}-rds-"
  recovery_window_in_days = 7
  
  tags = {
    Name = "${var.project_name}-rds-credentials"
  }
}

resource "aws_secretsmanager_secret_version" "rds_credentials" {
  secret_id = aws_secretsmanager_secret.rds_credentials.id
  secret_string = jsonencode({
    username = var.rds_username
    password = var.rds_password
    engine   = "postgres"
    host     = aws_db_instance.main.address
    port     = aws_db_instance.main.port
    dbname   = var.rds_db_name
  })
}
