import Hero from './components/Hero';
import WhyKynel from './components/WhyKynel';
import WhatWeAutomate from './components/WhatWeAutomate';
import WhoWeHelp from './components/WhoWeHelp';
import HowItWorks from './components/HowItWorks';
import About from './components/About';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Simple top nav */}
      <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="text-base font-semibold tracking-tight">Kynel Labs</div>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-300">
            <a href="#" className="hover:text-white">Home</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#cases" className="hover:text-white">Case Studies</a>
          </nav>
          <a href="#pricing" className="inline-flex items-center justify-center rounded-md bg-violet-500 px-3 py-2 text-xs font-semibold text-white shadow hover:bg-violet-400">Book Audit</a>
        </div>
      </header>

      <main>
        <Hero />
        <WhyKynel />
        <WhatWeAutomate />
        <WhoWeHelp />
        <HowItWorks />
        <About />
        <Pricing />
      </main>

      <Footer />
    </div>
  );
}

export default App;
