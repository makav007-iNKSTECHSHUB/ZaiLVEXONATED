import React from 'react';

// MVP Test Config: Replace these placeholder URLs with your actual image URLs later
const MODEL_PHOTOS = [
  { id: '1', title: 'Editorial Noir I', price: '$45', src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000' },
  { id: '2', title: 'Structural Shadow II', price: '$60', src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000' },
  { id: '3', title: 'Minimalist Form III', price: '$45', src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000' },
];

export default function ZaiLvexonatedMVP() {
  return (
    <div className="min-h-screen bg-black text-zinc-100 font-sans selection:bg-zinc-800 selection:text-white">
      {/* Premium Minimalist Header */}
      <header className="border-b border-zinc-900 px-6 py-8 flex justify-between items-center max-w-7xl mx-auto">
        <h1 className="text-2xl font-black tracking-widest text-white">ZAILVEXONATED</h1>
        <nav className="space-x-6 text-xs tracking-widest text-zinc-400 uppercase">
          <span className="text-white">Studio</span>
          <span className="cursor-not-allowed opacity-50">Archive</span>
          <span className="cursor-not-allowed opacity-50">Contact</span>
        </nav>
      </header>

      {/* Main Focus Area */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="max-w-2xl mb-16">
          <p className="text-xs text-zinc-500 uppercase tracking-widest mb-3">// PRE-RELEASE UTILITY PLATFORM</p>
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
            Visual identities, uncompromised structures, raw captures.
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed">
            A collaborative collection featuring elite editorial talent. Secure high-resolution digital master licenses or request direct booking blocks below.
          </p>
        </div>

        {/* The Photo Grid (The Hook) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {MODEL_PHOTOS.map((photo) => (
            <div key={photo.id} className="group relative border border-zinc-900 bg-zinc-950 p-4 transition-all duration-300 hover:border-zinc-800">
              <div className="aspect-[3/4] w-full overflow-hidden bg-zinc-900 mb-4 grayscale transition-all duration-500 group-hover:grayscale-0">
                <img 
                  src={photo.src} 
                  alt={photo.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-semibold text-white tracking-wide">{photo.title}</h3>
                  <p className="text-xs text-zinc-500">Digital Asset License Included</p>
                </div>
                <span className="text-sm font-mono text-zinc-400 bg-zinc-900 px-2 py-1">{photo.price}</span>
              </div>
              
              {/* SMOKE TEST BUTTON 1: The Purchase Intent */}
              <button 
                onClick={() => alert("TRAFFIC_VALIDATION: High-Res Master Pkg selected. Processing gateway setup...")}
                className="w-full bg-zinc-100 text-black text-xs font-bold tracking-widest uppercase py-3 transition-colors hover:bg-white"
              >
                Acquire Digital License
              </button>
            </div>
          ))}
        </div>

        {/* SMOKE TEST FORM: The Booking Intent */}
        <section className="border border-zinc-900 bg-zinc-950 p-8 max-w-xl mx-auto text-center">
          <h3 className="text-xl font-bold text-white mb-2">Secure Studio Booking Block</h3>
          <p className="text-xs text-zinc-400 mb-6">Request direct access for commercial campaigns or exclusive collaborative sessions.</p>
          
          <form onSubmit={(e) => { e.preventDefault(); alert("TRAFFIC_VALIDATION: Studio request submitted."); }} className="space-y-4">
            <input 
              type="email" 
              required
              placeholder="Enter corporate or professional email" 
              className="w-full bg-black border border-zinc-800 px-4 py-3 text-sm text-white rounded-none focus:outline-none focus:border-zinc-500 transition-colors"
            />
            <button 
              type="submit"
              className="w-full bg-zinc-900 text-white text-xs font-bold tracking-widest uppercase py-3 border border-zinc-800 transition-colors hover:bg-zinc-800"
            >
              Check Availability Slots
            </button>
          </form>
        </section>
      </main>

      <footer className="border-t border-zinc-900 mt-20 px-6 py-8 max-w-7xl mx-auto text-center text-xs text-zinc-600 tracking-widest uppercase">
        © 2026 ZaiLVEXONATED Studio. Powered by Vercel Edge Framework.
      </footer>
    </div>
  );
}
