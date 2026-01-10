// Role-based color system
export const roleColors = {
  expert: {
    primary: '#4A1D96', // Dark Purple
    secondary: '#2D2D2D', // Charcoal
    accent: '#D4AF37', // Gold
    gradient: 'from-purple-900 via-purple-800 to-gray-900',
    border: 'border-purple-700',
    bg: 'bg-purple-900',
    text: 'text-purple-600',
    hover: 'hover:bg-purple-800',
  },
  teacher: {
    primary: '#1E3A8A', // Deep Blue
    secondary: '#4338CA', // Indigo
    accent: '#3B82F6', // Blue
    gradient: 'from-blue-900 via-indigo-800 to-blue-700',
    border: 'border-blue-700',
    bg: 'bg-blue-900',
    text: 'text-blue-600',
    hover: 'hover:bg-blue-800',
  },
  student: {
    primary: '#047857', // Emerald Green
    secondary: '#059669',
    accent: '#F97316', // Orange
    gradient: 'from-emerald-800 via-green-700 to-emerald-600',
    border: 'border-emerald-700',
    bg: 'bg-emerald-800',
    text: 'text-emerald-600',
    hover: 'hover:bg-emerald-700',
  },
};

export type RoleType = keyof typeof roleColors;
