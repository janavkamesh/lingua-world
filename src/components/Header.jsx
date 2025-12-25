import React from 'react';

const Header = () => (
  <header className="flex flex-col items-center justify-center mb-10 text-center relative z-10">
    <h1 className="font-display font-black text-4xl md:text-5xl tracking-[8px] md:tracking-[12px] text-white mb-2">
      LINGUA<span className="text-primary drop-shadow-[0_0_20px_rgba(16,185,129,0.4)]">FLOW</span>
    </h1>
    <p className="text-[10px] md:text-xs tracking-[4px] uppercase text-gray-400 font-bold border border-white/5 bg-white/5 px-4 py-1.5 rounded-full backdrop-blur-md">
      Powered by LinguaFlow AI
    </p>
  </header>
);

export default Header;