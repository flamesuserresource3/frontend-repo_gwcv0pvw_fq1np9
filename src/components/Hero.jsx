import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-[70vh] w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient veil to improve text contrast without blocking interactions */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.4)_40%,rgba(0,0,0,0.7)_100%)]" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs text-white/80 backdrop-blur">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          Live 3D Space Lab
        </div>
        <h1 className="mt-6 bg-gradient-to-br from-white via-violet-100 to-fuchsia-200 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl md:text-6xl">
          Cosmic Classifier
        </h1>
        <p className="mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
          Explore multiple ML models and watch predictions come alive in an immersive, interactive galaxy.
        </p>
      </div>
    </section>
  );
}
