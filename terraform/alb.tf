# ============================================
# Security Group - ALB
# ============================================

resource "aws_security_group" "alb" {
  name        = "${var.project_name}-alb-sg"
  description = "Security group for ALB"
  vpc_id      = aws_vpc.main.id

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "${var.project_name}-alb-sg"
  }
}

# ============================================
# Security Group - ECS Tasks
# ============================================

resource "aws_security_group" "ecs_tasks" {
  name        = "${var.project_name}-ecs-tasks-sg"
  description = "Security group for ECS tasks"
  vpc_id      = aws_vpc.main.id

  ingress {
    from_port       = 3000
    to_port         = 3004
    protocol        = "tcp"
    security_groups = [aws_security_group.alb.id]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "${var.project_name}-ecs-tasks-sg"
  }
}

# ============================================
# Application Load Balancer
# ============================================

resource "aws_lb" "main" {
  name               = "${var.project_name}-alb"
  internal           = false
  load_balancer_type = "application"
  security_groups    = [aws_security_group.alb.id]
  subnets            = aws_subnet.public[*].id

  tags = {
    Name = "${var.project_name}-alb"
  }
}

# ============================================
# Target Groups
# ============================================

resource "aws_lb_target_group" "gateway" {
  name        = "${var.project_name}-gateway-tg"
  port        = 3000
  protocol    = "HTTP"
  vpc_id      = aws_vpc.main.id
  target_type = "ip"

  health_check {
    healthy_threshold   = 2
    unhealthy_threshold = 2
    timeout             = 3
    interval            = 30
    path                = "/health"
    matcher             = "200"
  }

  tags = {
    Name = "${var.project_name}-gateway-tg"
  }
}

resource "aws_lb_target_group" "auth" {
  name        = "${var.project_name}-auth-tg"
  port        = 3001
  protocol    = "HTTP"
  vpc_id      = aws_vpc.main.id
  target_type = "ip"

  health_check {
    healthy_threshold   = 2
    unhealthy_threshold = 2
    timeout             = 3
    interval            = 30
    path                = "/health"
    matcher             = "200"
  }

  tags = {
    Name = "${var.project_name}-auth-tg"
  }
}

resource "aws_lb_target_group" "project" {
  name        = "${var.project_name}-project-tg"
  port        = 3002
  protocol    = "HTTP"
  vpc_id      = aws_vpc.main.id
  target_type = "ip"

  health_check {
    healthy_threshold   = 2
    unhealthy_threshold = 2
    timeout             = 3
    interval            = 30
    path                = "/health"
    matcher             = "200"
  }

  tags = {
    Name = "${var.project_name}-project-tg"
  }
}

resource "aws_lb_target_group" "testcase" {
  name        = "${var.project_name}-testcase-tg"
  port        = 3003
  protocol    = "HTTP"
  vpc_id      = aws_vpc.main.id
  target_type = "ip"

  health_check {
    healthy_threshold   = 2
    unhealthy_threshold = 2
    timeout             = 3
    interval            = 30
    path                = "/health"
    matcher             = "200"
  }

  tags = {
    Name = "${var.project_name}-testcase-tg"
  }
}

resource "aws_lb_target_group" "testrun" {
  name        = "${var.project_name}-testrun-tg"
  port        = 3004
  protocol    = "HTTP"
  vpc_id      = aws_vpc.main.id
  target_type = "ip"

  health_check {
    healthy_threshold   = 2
    unhealthy_threshold = 2
    timeout             = 3
    interval            = 30
    path                = "/health"
    matcher             = "200"
  }

  tags = {
    Name = "${var.project_name}-testrun-tg"
  }
}

# ============================================
# ALB Listeners
# ============================================

resource "aws_lb_listener" "main" {
  load_balancer_arn = aws_lb.main.arn
  port              = 80
  protocol          = "HTTP"

  default_action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.gateway.arn
  }
}

# ============================================
# ALB Listener Rules (Path-based routing)
# ============================================

resource "aws_lb_listener_rule" "auth" {
  listener_arn = aws_lb_listener.main.arn
  priority     = 1

  action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.auth.arn
  }

  condition {
    path_pattern {
      values = ["/api/auth*"]
    }
  }
}

resource "aws_lb_listener_rule" "project" {
  listener_arn = aws_lb_listener.main.arn
  priority     = 2

  action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.project.arn
  }

  condition {
    path_pattern {
      values = ["/api/projects*"]
    }
  }
}

resource "aws_lb_listener_rule" "testcase" {
  listener_arn = aws_lb_listener.main.arn
  priority     = 3

  action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.testcase.arn
  }

  condition {
    path_pattern {
      values = ["/api/testcases*"]
    }
  }
}

resource "aws_lb_listener_rule" "testrun" {
  listener_arn = aws_lb_listener.main.arn
  priority     = 4

  action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.testrun.arn
  }

  condition {
    path_pattern {
      values = ["/api/testruns*"]
    }
  }
}
