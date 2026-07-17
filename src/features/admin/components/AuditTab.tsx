import { Activity, Calendar, Search } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import { GlassDropdown } from '../../../shared/components';
import { useAuditLogsQuery } from '../hooks/useAuditLogs';

interface AuditTabProps {
  projectId: string;
}

export function AuditTab({ projectId }: AuditTabProps) {
  const { data: auditLogs = [], isLoading } = useAuditLogsQuery(projectId);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterAction, setFilterAction] = useState('');

  const getLogDetails = (log: any): string => {
    if (log.resourceType) {
      let details = log.resourceType;
      if (log.resourceId) {
        details += ` (${log.resourceId.slice(0, 8)}...)`;
      }
      if (log.metadata) {
        try {
          const meta = JSON.parse(log.metadata);
          if (meta.name) details += ` - ${meta.name}`;
        } catch {
          /* ignore */
        }
      }
      return details;
    }
    return log.metadata ? JSON.parse(log.metadata || '{}') : 'No details';
  };

  const filteredLogs = auditLogs.filter((log) => {
    const matchesSearch =
      !searchTerm ||
      log.userEmail?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.action?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.resourceType?.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesFilter = !filterAction || log.action === filterAction;

    return matchesSearch && matchesFilter;
  });

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });
    } catch {
      return 'Invalid date';
    }
  };

  const getActionColor = (action: string) => {
    switch (action?.toLowerCase()) {
      case 'create':
        return 'text-green-400';
      case 'update':
        return 'text-blue-400';
      case 'delete':
        return 'text-red-400';
      case 'login':
        return 'text-purple-400';
      default:
        return 'text-gray-400';
    }
  };

  if (isLoading) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 dark:text-white/50">Loading audit logs...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Audit Log</h2>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search logs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 liquid-glass rounded-lg outline-none focus:ring-2 focus:ring-orange-500/50 transition-ui text-sm text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-400 w-64"
            />
          </div>
          <GlassDropdown
            label=""
            value={filterAction}
            options={[
              { id: '', label: 'All Actions' },
              { id: 'create', label: 'Create' },
              { id: 'update', label: 'Update' },
              { id: 'delete', label: 'Delete' },
              { id: 'login', label: 'Login' },
            ]}
            onChange={setFilterAction}
            placeholder="Filter by action"
            zIndex={10}
          />
        </div>
      </div>

      {filteredLogs.length === 0 ? (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
          <Activity className="w-16 h-16 text-gray-400 dark:text-white/30 mx-auto mb-4" />
          <p className="text-gray-500 dark:text-white/50">
            {auditLogs.length === 0 ? 'No audit logs found' : 'No logs match your search criteria'}
          </p>
        </motion.div>
      ) : (
        <div className="space-y-2">
          {filteredLogs.map((log, index) => (
            <motion.div
              key={log.id || `log-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="liquid-glass p-4 rounded-xl border border-gray-200 dark:border-white/10"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3 flex-1">
                  <div className="w-8 h-8 accent-orange rounded-lg flex items-center justify-center mt-0.5">
                    <Activity className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-gray-900 dark:text-white font-medium">
                        {log.firstName && log.lastName ? `${log.firstName} ${log.lastName}` : log.userEmail}
                      </span>
                      <span className={`text-sm ${getActionColor(log.action)}`}>{log.action}</span>
                    </div>
                    <p className="text-gray-400 dark:text-white/50 text-sm">{getLogDetails(log)}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-white/40">
                  <Calendar className="w-3 h-3" />
                  {formatDate(log.createdAt)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
