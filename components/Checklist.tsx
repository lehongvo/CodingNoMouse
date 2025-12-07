'use client';

import { useState } from 'react';

interface ChecklistProps {
  items: string[];
  title?: string;
}

export default function Checklist({ items, title = 'Final Checklist' }: ChecklistProps) {
  const [checkedItems, setCheckedItems] = useState<Set<number>>(new Set());

  const toggleItem = (index: number) => {
    const newChecked = new Set(checkedItems);
    if (newChecked.has(index)) {
      newChecked.delete(index);
    } else {
      newChecked.add(index);
    }
    setCheckedItems(newChecked);
  };

  const progress = (checkedItems.size / items.length) * 100;

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-white">{title}</h2>
        <span className="text-sm text-gray-400">
          {checkedItems.size}/{items.length} hoàn thành
        </span>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-700 rounded-full h-2 mb-6">
        <div
          className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Checklist Items */}
      <div className="space-y-3">
        {items.map((item, index) => {
          const isChecked = checkedItems.has(index);
          return (
            <label
              key={index}
              className={`flex items-start gap-3 p-3 rounded-lg cursor-pointer transition-all ${
                isChecked
                  ? 'bg-green-500/10 border border-green-500/30'
                  : 'bg-gray-700/30 border border-gray-600/30 hover:bg-gray-700/50'
              }`}
            >
              <input
                type="checkbox"
                checked={isChecked}
                onChange={() => toggleItem(index)}
                className="mt-1 w-5 h-5 rounded border-gray-600 bg-gray-700 text-green-500 focus:ring-green-500 focus:ring-2"
              />
              <span
                className={`flex-1 text-sm ${
                  isChecked ? 'text-gray-400 line-through' : 'text-gray-200'
                }`}
              >
                {item}
              </span>
              {isChecked && (
                <span className="text-green-500 text-xl">✓</span>
              )}
            </label>
          );
        })}
      </div>
    </div>
  );
}


