export type EventType =
  | 'auth.login'
  | 'auth.logout'
  | 'auth.token_refresh'
  | 'auth.permission_changed'
  | 'project.created'
  | 'project.member_added'
  | 'project.member_removed'
  | 'project.settings_updated'
  | 'testcase.created'
  | 'testcase.updated'
  | 'testcase.deleted'
  | 'testrun.started'
  | 'testrun.completed'
  | 'testrun.failed'
  | 'system.error'
  | 'system.cache_invalidation';

export interface DomainEvent {
  id: string;
  event: EventType;
  service: string;
  timestamp: string;
  requestId?: string | undefined;
  userId?: string | undefined;
  projectId?: string | undefined;
  metadata?: Record<string, unknown> | undefined;
  version: number;
}

export interface EventStreamGroup {
  stream: string;
  group: string;
}

export interface EventSubscriptionHandler {
  (event: DomainEvent): Promise<void>;
}

export interface EventBusConfig {
  redisUrl: string;
  serviceName: string;
  maxRetries?: number;
}
