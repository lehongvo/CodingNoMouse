'use client';

import { Shortcut } from '@/types/curriculum';

interface ShortcutDisplayProps {
  shortcuts: Shortcut[];
  title?: string;
}

export default function ShortcutDisplay({ shortcuts, title = 'Keyboard Shortcuts' }: ShortcutDisplayProps) {
  if (!shortcuts || shortcuts.length === 0) return null;

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-5 border border-gray-700">
      <h4 className="text-lg font-semibold text-yellow-400 mb-4">{title}</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {shortcuts.map((shortcut, idx) => (
          <div
            key={idx}
            className="bg-gray-900/50 rounded-lg p-3 flex items-center gap-3 hover:bg-gray-900/70 transition-colors"
          >
            <kbd className="px-3 py-1.5 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 text-yellow-400 rounded-md text-sm font-mono font-semibold whitespace-nowrap min-w-fit">
              {shortcut.key}
            </kbd>
            <span className="text-gray-300 text-sm flex-1">{shortcut.description}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

