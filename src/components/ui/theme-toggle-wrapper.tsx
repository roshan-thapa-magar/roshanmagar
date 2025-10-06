'use client';

import { useState, useEffect } from 'react';
import { ThemeToggle } from './theme-toggle';

export function ThemeToggleWrapper() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    // Return a placeholder during SSR that matches the final component size
    return (
      <div className="w-9 h-9 flex items-center justify-center">
        <div className="w-4 h-4 bg-muted rounded" />
      </div>
    );
  }

  return <ThemeToggle />;
} 