import { motion } from 'motion/react';
import { Plus, Edit2, Trash2, FileText } from 'lucide-react';

interface FieldsTabProps {
  items: any[];
  canEdit: boolean;
  onAdd: () => void;
  onEdit: (item: any) => void;
  onDelete: (item: any) => void;
}

export function FieldsTab({ items, canEdit, onAdd, onEdit, onDelete }: FieldsTabProps) {
  const getFieldTypeColor = (type: string) => {
    switch (type) {
      case 'text':
        return 'accent-blue';
      case 'number':
        return 'accent-green';
      case 'date':
        return 'accent-purple';
      case 'select':
        return 'accent-orange';
      default:
        return 'accent-gray';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Custom Fields</h2>
        {canEdit && (
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onAdd}
            className="flex items-center gap-2 px-4 py-2 accent-purple text-white rounded-lg font-medium text-sm"
          >
            <Plus className="w-4 h-4" />
            Add Field
          </motion.button>
        )}
      </div>

      {items.length === 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <FileText className="w-16 h-16 text-gray-400 dark:text-white/30 mx-auto mb-4" />
          <p className="text-gray-500 dark:text-white/50">No custom fields configured</p>
          {canEdit && (
            <button
              onClick={onAdd}
              className="mt-4 text-purple-400 hover:text-purple-300"
            >
              Add your first field
            </button>
          )}
        </motion.div>
      ) : (
        <div className="space-y-4">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="liquid-glass p-4 rounded-xl border border-gray-200 dark:border-white/10"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 ${getFieldTypeColor(item.type)} rounded-lg flex items-center justify-center`}>
                    <FileText className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <span className="text-gray-900 dark:text-white font-medium">{item.name}</span>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-gray-400 dark:text-white/50 capitalize">{item.type}</span>
                      {item.required && (
                        <span className="text-xs px-2 py-0.5 bg-red-500/20 text-red-300 rounded-full">Required</span>
                      )}
                      {item.options && item.options.length > 0 && (
                        <span className="text-xs text-gray-400 dark:text-white/50">
                          {item.options.length} options
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                {canEdit && (
                  <div className="flex items-center gap-2">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => onEdit(item)}
                      className="p-1.5 text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-black/[0.05] dark:hover:bg-white/10 rounded-lg transition-ui"
                    >
                      <Edit2 className="w-3 h-3" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => onDelete(item)}
                      className="p-1.5 text-gray-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-ui"
                    >
                      <Trash2 className="w-3 h-3" />
                    </motion.button>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
