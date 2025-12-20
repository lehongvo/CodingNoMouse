'use client';

import { Shortcut } from '@/types/curriculum';

interface ShortcutDisplayProps {
  shortcuts: Shortcut[];
  title?: string;
}

export default function ShortcutDisplay({ shortcuts, title = '⌨️ Keyboard Shortcuts' }: ShortcutDisplayProps) {
  if (!shortcuts || shortcuts.length === 0) return null;

  return (
    <div>
      <h4 className="text-sm font-bold text-yellow-400 mb-3">{title}</h4>
      <div className="space-y-2">
        {shortcuts.map((shortcut, idx) => (
          <div
            key={idx}
            className="bg-gray-900/60 rounded-lg p-3 flex items-center gap-3 hover:bg-gray-900/80 transition-colors border border-gray-700/50"
          >
            <kbd className="px-3 py-1.5 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/40 text-yellow-300 rounded-md text-xs font-mono font-bold whitespace-nowrap flex-shrink-0 shadow-sm">
              {shortcut.key}
            </kbd>
            <span className="text-gray-300 text-sm flex-1 leading-relaxed">{shortcut.description}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

