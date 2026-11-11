'use client';
import { useState } from 'react';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [result, setResult] = useState<any>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // উদাহরণস্বরূপ সার্চ রেজাল্ট দেখানো হচ্ছে
    setResult({
      match: searchQuery || "Real Madrid vs Barcelona",
      sport: "Football",
      prediction: "Home Win (54%)",
      confidence: "HIGH",
      dataSource: "API-Football & Poisson Model"
    });
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white p-6 font-sans">
      <div className="max-w-4xl mx-auto text-center py-12">
        <h1 className="text-4xl font-extrabold text-cyan-400 mb-2">PRO PREDICT AI</h1>
        <p className="text-slate-400 mb-8">"Smarter Data. Deeper Analysis. Better Predictions."</p>
        
        {/* Universal Search Bar */}
        <form onSubmit={handleSearch} className="flex gap-2 max-w-xl mx-auto mb-12">
          <input 
            type="text" 
            placeholder="দল বা খেলোয়াড়ের নাম লিখুন (যেমন: Real Madrid, Virat Kohli)..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 bg-slate-900 border border-slate-800 px-4 py-3 rounded-lg text-white focus:outline-none focus:border-cyan-500"
          />
          <button type="submit" className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold px-6 py-3 rounded-lg transition">
            খুঁজুন
          </button>
        </form>

        {/* Result Display */}
        {result && (
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl text-left max-w-xl mx-auto shadow-xl">
            <h3 className="text-xl font-bold text-green-400 mb-2">🔍 ম্যাচের পূর্বাভাস (Prediction Result)</h3>
            <p><strong>ম্যাচ:</strong> {result.match}</p>
            <p><strong>খেলার ধরন:</strong> {result.sport}</p>
            <p><strong>প্রেডিকশন:</strong> {result.prediction}</p>
            <p><strong>কনফিডেন্স:</strong> <span className="text-cyan-400">{result.confidence}</span></p>
            <p className="text-xs text-slate-500 mt-4">ডাটা উৎস: {result.dataSource}</p>
          </div>
        )}
      </div>
    </main>
  );
}