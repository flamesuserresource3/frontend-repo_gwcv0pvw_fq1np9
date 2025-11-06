import React, { useMemo, useState } from 'react';
import Hero from './components/Hero';
import ModelSelector from './components/ModelSelector';
import InputForm from './components/InputForm';
import PredictionViewer from './components/PredictionViewer';

function mockPredict(modelId, values) {
  // Deterministic yet varied mock prediction to simulate multiple models
  const sum = values.reduce((a, b) => a + b, 0);
  const seed = Math.abs(Math.sin(sum + modelId.length));
  const classes = ['galaxy', 'star', 'quasar'];
  const idx = Math.floor(seed * classes.length) % classes.length;
  const confidence = 0.55 + (seed % 0.4); // 0.55 - 0.95
  return { label: classes[idx], confidence };
}

export default function App() {
  const [model, setModel] = useState('nebula-net');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handlePredict = async (values) => {
    setLoading(true);
    // Simulate request delay
    await new Promise((r) => setTimeout(r, 600));
    const res = mockPredict(model, values);
    setResult(res);
    setLoading(false);
  };

  const title = useMemo(() => {
    switch (model) {
      case 'nebula-net':
        return 'NebulaNet · CNN';
      case 'starlight-svm':
        return 'Starlight · SVM';
      case 'quasar-transformer':
        return 'Quasar · Transformer';
      default:
        return model;
    }
  }, [model]);

  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Hero />

      <main className="mx-auto -mt-16 max-w-6xl px-6 pb-24">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="md:col-span-2 space-y-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-white">Select Model</h2>
                <div className="text-xs text-white/60">{title}</div>
              </div>
              <ModelSelector value={model} onChange={setModel} />
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
              <h2 className="mb-4 text-lg font-semibold text-white">Input Features</h2>
              <InputForm onPredict={handlePredict} loading={loading} />
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
              <h2 className="mb-4 text-lg font-semibold text-white">Prediction</h2>
              <PredictionViewer
                result={result?.label}
                confidence={result?.confidence ?? 0}
                selectedModel={title}
              />
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-white/70">
              This is a live demo using mock predictions. Connect your backend to replace the mock with real model outputs.
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-white/10 bg-black/60 py-6 text-center text-xs text-white/50">
        Built for a space-themed multi‑model ML experience.
      </footer>
    </div>
  );
}
