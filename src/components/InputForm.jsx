import React, { useState } from 'react';
import { Rocket, SlidersHorizontal } from 'lucide-react';

export default function InputForm({ onPredict, loading }) {
  const [inputs, setInputs] = useState({
    a: '',
    b: '',
    c: '',
    d: '',
    e: '',
    f: '',
  });

  const handleChange = (key, val) => {
    if (/^-?\d*(?:\.\d{0,4})?$/.test(val)) {
      setInputs((s) => ({ ...s, [key]: val }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const values = Object.values(inputs).map((v) => Number(v || 0));
    onPredict(values);
  };

  const fields = [
    { key: 'a', label: 'Feature A' },
    { key: 'b', label: 'Feature B' },
    { key: 'c', label: 'Feature C' },
    { key: 'd', label: 'Feature D' },
    { key: 'e', label: 'Feature E' },
    { key: 'f', label: 'Feature F' },
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex items-center gap-2 text-white/80">
        <SlidersHorizontal size={16} />
        <span className="text-sm">Enter input features (numbers)</span>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {fields.map((f) => (
          <div key={f.key}>
            <label className="mb-1 block text-xs text-white/60">{f.label}</label>
            <input
              type="text"
              inputMode="decimal"
              value={inputs[f.key]}
              onChange={(e) => handleChange(f.key, e.target.value)}
              placeholder="0"
              className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder-white/40 outline-none transition focus:border-fuchsia-400/60 focus:bg-white/10"
            />
          </div>
        ))}
      </div>
      <button
        type="submit"
        disabled={loading}
        className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-fuchsia-500 to-violet-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/20 transition hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60"
      >
        <Rocket size={16} />
        {loading ? 'Predicting...' : 'Run Prediction'}
      </button>
    </form>
  );
}
