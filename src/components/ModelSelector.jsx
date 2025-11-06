import React from 'react';

const models = [
  { id: 'nebula-net', label: 'NebulaNet' },
  { id: 'starlight-svm', label: 'Starlight SVM' },
  { id: 'quasar-transformer', label: 'Quasar Transformer' },
];

export default function ModelSelector({ value, onChange }) {
  return (
    <div className="w-full">
      <label className="mb-2 block text-sm font-medium text-white/80">Model</label>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        {models.map((m) => (
          <button
            key={m.id}
            onClick={() => onChange(m.id)}
            className={`rounded-xl border p-3 text-left transition ${
              value === m.id
                ? 'border-fuchsia-400/60 bg-fuchsia-400/10 shadow-[0_0_30px_-10px_rgba(217,70,239,0.6)]'
                : 'border-white/10 hover:border-white/20 hover:bg-white/5'
            }`}
          >
            <div className="text-sm font-semibold text-white">{m.label}</div>
            <div className="mt-1 text-xs text-white/60">Multi-class galaxy classifier</div>
          </button>
        ))}
      </div>
    </div>
  );
}
