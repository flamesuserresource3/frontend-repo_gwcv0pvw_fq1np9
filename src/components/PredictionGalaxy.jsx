import React from 'react';
import Spline from '@splinetool/react-spline';

export default function PredictionGalaxy({ label }) {
  // Single interactive galaxy scene for predictions
  // Keeps it performant and consistent while still being immersive
  return (
    <div className="relative h-56 w-full overflow-hidden rounded-lg">
      <Spline
        scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode"
        style={{ width: '100%', height: '100%' }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/40" />

      <div className="pointer-events-none absolute bottom-2 right-2 rounded-full border border-white/10 bg-black/30 px-2.5 py-1 text-[10px] text-white/70 backdrop-blur">
        {label?.toUpperCase()} VIEW
      </div>
    </div>
  );
}
