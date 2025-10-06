// Theme initialization utility
export function getInitialTheme(): 'light' | 'dark' {
  if (typeof window === 'undefined') {
    return 'light'; // Default for SSR
  }
  
  try {
    const theme = localStorage.getItem('theme') || 'system';
    if (theme === 'system') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return theme as 'light' | 'dark';
  } catch {
    return 'light';
  }
}

export function applyTheme(theme: 'light' | 'dark') {
  if (typeof window === 'undefined') return;
  
  const root = document.documentElement;
  if (theme === 'dark') {
    root.classList.add('dark');
  } else {
    root.classList.remove('dark');
  }
} 