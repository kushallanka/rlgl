export function getColorWithOpacity(color: string, opacity: number): string {
  if (color?.startsWith('#')) {
    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  }
  const colorMap: Record<string, string> = {
    red: '#EF4444', orange: '#F97316', yellow: '#EAB308',
    green: '#22C55E', blue: '#3B82F6', purple: '#A855F7',
    pink: '#EC4899', gray: '#6B7280',
  };
  const hex = colorMap[color?.toLowerCase()] || '#8B5CF6';
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

export function getPriorityColor(priorityName: string, configSchema?: any): string {
  const priority = configSchema?.priorities?.find((p: any) => p.name === priorityName);
  return priority?.color || '#3B82F6';
}

export function getTypeColor(typeName: string, configSchema?: any): string {
  const type = configSchema?.types?.find((t: any) => t.name === typeName);
  return type?.color || '#8B5CF6';
}
