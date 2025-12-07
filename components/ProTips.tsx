'use client';

import { curriculum } from '@/data/curriculum';

export default function ProTips() {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
      <h2 className="text-2xl font-bold mb-6 text-white">💡 Pro Tips</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* If Stuck */}
        <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-xl p-5 border border-yellow-500/30">
          <h3 className="text-lg font-semibold text-yellow-400 mb-3">Nếu stuck:</h3>
          <ul className="space-y-2">
            {curriculum.proTips.ifStuck.map((tip, idx) => (
              <li key={idx} className="text-gray-300 text-sm flex items-start gap-2">
                <span className="text-yellow-400 mt-1">•</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* If Too Hard */}
        <div className="bg-gradient-to-br from-red-500/10 to-pink-500/10 rounded-xl p-5 border border-red-500/30">
          <h3 className="text-lg font-semibold text-red-400 mb-3">Nếu quá khó:</h3>
          <ul className="space-y-2">
            {curriculum.proTips.ifTooHard.map((tip, idx) => (
              <li key={idx} className="text-gray-300 text-sm flex items-start gap-2">
                <span className="text-red-400 mt-1">•</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* If Too Easy */}
        <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-xl p-5 border border-green-500/30">
          <h3 className="text-lg font-semibold text-green-400 mb-3">Nếu quá dễ:</h3>
          <ul className="space-y-2">
            {curriculum.proTips.ifTooEasy.map((tip, idx) => (
              <li key={idx} className="text-gray-300 text-sm flex items-start gap-2">
                <span className="text-green-400 mt-1">•</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}




