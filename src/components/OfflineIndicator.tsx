import React from 'react';
import { useOnlineStatus } from '../hooks/useOnlineStatus';
import { WifiOff } from 'lucide-react';

export const OfflineIndicator: React.FC = () => {
  const isOnline = useOnlineStatus();

  if (isOnline) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 flex items-center gap-2 rounded-lg bg-amber-500 px-3 py-2 text-xs font-medium text-white shadow-lg animate-in fade-in slide-in-from-bottom-4 duration-300">
      <WifiOff className="h-4 w-4" />
      <span>Offline Mode — Cached data is being used.</span>
    </div>
  );
};
