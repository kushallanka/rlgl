import { motion } from 'motion/react';
import { Plus, Edit2, Trash2, Tag } from 'lucide-react';

interface TypesTabProps {
  items: any[];
  canEdit: boolean;
  onAdd: () => void;
  onEdit: (item: any) => void;
  onDelete: (item: any) => void;
}

// Map color names to hex values for gradient backgrounds
const colorHexMap: Record<string, string> = {
  red: '#ef4444',
  orange: '#f97316',
  yellow: '#eab308',
  green: '#22c55e',
  blue: '#3b82f6',
  purple: '#a855f7',
  pink: '#ec4899',
  gray: '#6b7280',
};

// Convert color name to rgba with opacity
const getColorWithOpacity = (color: string, opacity: number): string => {
  const hex = colorHexMap[color?.toLowerCase()] || '#3b82f6';
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

export function TypesTab({ items, canEdit, onAdd, onEdit, onDelete }: TypesTabProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Test Case Types</h2>
        {canEdit && (
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onAdd}
            className="flex items-center gap-2 px-4 py-2 accent-blue text-white rounded-lg font-medium text-sm"
          >
            <Plus className="w-4 h-4" />
            Add Type
          </motion.button>
        )}
      </div>

      {items.length === 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <Tag className="w-16 h-16 text-gray-400 dark:text-white/30 mx-auto mb-4" />
          <p className="text-gray-500 dark:text-white/50">No test case types configured</p>
          {canEdit && (
            <button
              onClick={onAdd}
              className="mt-4 text-blue-400 hover:text-blue-300"
            >
              Add your first type
            </button>
          )}
        </motion.div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="relative liquid-glass p-4 rounded-xl border border-gray-200 dark:border-white/10 overflow-hidden group"
              style={{
                background: `linear-gradient(135deg, ${getColorWithOpacity(item.color, 0.15)} 0%, transparent 100%)`,
              }}
            >
              {/* Faded color overlay */}
              <div
                className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity"
                style={{
                  background: `linear-gradient(135deg, ${item.color || '#3b82f6'} 0%, transparent 60%)`,
                }}
              />
              <div className="flex items-center justify-between relative z-10">
                <span className="text-gray-900 dark:text-white font-medium">{item.name}</span>
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
