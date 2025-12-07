'use client';

import { useProgress } from '@/hooks/useProgress';

export default function SyncStatus() {
  const { isSyncing, lastSync, syncError, syncWithServer } = useProgress();

  const formatTime = (date: Date | null) => {
    if (!date) return 'Never';
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    
    if (seconds < 60) return 'Just now';
    if (minutes < 60) return `${minutes}m ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h ago`;
    return date.toLocaleDateString();
  };

  return (
    <div className="fixed bottom-4 right-4 bg-gray-800/90 backdrop-blur-sm rounded-lg p-3 border border-gray-700 shadow-lg z-50">
      <div className="flex items-center gap-2 text-sm">
        {isSyncing ? (
          <>
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            <span className="text-gray-300">Syncing...</span>
          </>
        ) : syncError ? (
          <>
            <div className="w-2 h-2 bg-red-500 rounded-full" />
            <span className="text-red-400">Sync failed</span>
            <button
              onClick={() => syncWithServer(true)}
              className="text-blue-400 hover:text-blue-300 text-xs underline"
            >
              Retry
            </button>
          </>
        ) : (
          <>
            <div className="w-2 h-2 bg-green-500 rounded-full" />
            <span className="text-gray-300">Synced {formatTime(lastSync)}</span>
          </>
        )}
      </div>
    </div>
  );
}


