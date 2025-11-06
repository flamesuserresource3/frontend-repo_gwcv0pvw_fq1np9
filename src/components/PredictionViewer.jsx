import React from 'react';
import { Star, Orbit, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import PredictionGalaxy from './PredictionGalaxy';

const Mapping = {
  galaxy: {
    color: 'from-sky-400 to-cyan-300',
    icon: <Orbit size={18} />,
    desc: 'Spiral arms and cosmic dust suggest a galaxy classification.'
  },
  star: {
    color: 'from-amber-300 to-yellow-500',
    icon: <Star size={18} />,
    desc: 'Spectral lines and luminosity patterns point to a star.'
  },
  quasar: {
    color: 'from-fuchsia-400 to-violet-500',
    icon: <Sparkles size={18} />,
    desc: 'Extremely bright, distant source identified as a quasar.'
  }
};

export default function PredictionViewer({ result, confidence, selectedModel }) {
  if (!result) {
    return (
      <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-white/70">
        Run a prediction to see results here.
      </div>
    );
  }

  const m = Mapping[result];

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="rounded-xl border border-white/10 bg-white/5 p-4"
    >
      <div className="flex items-center justify-between">
        <div className="text-sm text-white/60">Model</div>
        <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
          {selectedModel}
        </div>
      </div>

      <div className="mt-4">
        <motion.div
          key={result}
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 220, damping: 18 }}
          className={`inline-flex items-center gap-2 rounded-lg bg-gradient-to-r ${m.color} px-3 py-1.5 text-sm font-semibold text-black/90`}
        >
          {m.icon}
          {result.toUpperCase()}
        </motion.div>
        <p className="mt-3 text-sm text-white/80">{m.desc}</p>
      </div>

      <div className="mt-4">
        <div className="mb-1 flex items-center justify-between text-xs text-white/60">
          <span>Confidence</span>
          <span className="text-white/80">{Math.round(confidence * 100)}%</span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${Math.max(5, Math.round(confidence * 100))}%` }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="h-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-sky-400"
          />
        </div>
      </div>

      <div className="mt-4">
        <PredictionGalaxy label={result} />
      </div>
    </motion.div>
  );
}
