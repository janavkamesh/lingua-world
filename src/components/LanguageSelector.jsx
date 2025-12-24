import React from 'react';
import { LANGUAGES } from '../utils/translate';

const LanguageSelector = ({ sourceLang, targetLang, setSource, setTarget, onSwap }) => {
  return (
    <div className="flex items-center justify-between w-full max-w-sm mb-10 relative z-10 bg-black/20 p-2 rounded-full border border-white/10 backdrop-blur-xl">
      {/* Source Select */}
      <div className="relative group">
        <select 
          className="appearance-none bg-transparent text-white font-bold py-3 pl-6 pr-10 rounded-full cursor-pointer focus:outline-none focus:bg-white/5 transition-colors"
          value={sourceLang} 
          onChange={(e) => setSource(e.target.value)}
        >
          {LANGUAGES.map(l => <option key={l.code} value={l.code} className="text-black">{l.flag} {l.name}</option>)}
        </select>
      </div>

      {/* Swap Button */}
      <button 
        onClick={onSwap} 
        className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-accent flex items-center justify-center text-black font-bold shadow-neon hover:rotate-180 transition-transform duration-500"
      >
        ⇄
      </button>

      {/* Target Select */}
      <div className="relative group">
        <select 
          className="appearance-none bg-transparent text-primary font-bold py-3 pl-8 pr-6 rounded-full cursor-pointer focus:outline-none focus:bg-white/5 transition-colors text-right"
          value={targetLang} 
          onChange={(e) => setTarget(e.target.value)}
        >
          {LANGUAGES.map(l => <option key={l.code} value={l.code} className="text-black">{l.flag} {l.name}</option>)}
        </select>
      </div>
    </div>
  );
};

export default LanguageSelector;