import React from 'react';
import { LANGUAGES } from '../utils/translate';

const LanguageSelector = ({ sourceLang, targetLang, setSource, setTarget, onSwap }) => {
  return (
    <div className="flex items-center justify-center gap-4 mb-8 relative z-10 w-full max-w-md">
      {/* Source Pill */}
      <div className="relative group">
        <select 
          className="appearance-none bg-surface border-2 border-primary text-primary font-bold py-3 pl-6 pr-8 rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm uppercase tracking-wide hover:bg-white/5"
          value={sourceLang} 
          onChange={(e) => setSource(e.target.value)}
        >
          {LANGUAGES.map(l => <option key={l.code} value={l.code} className="bg-background text-white">{l.name}</option>)}
        </select>
        {/* Custom Arrow */}
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-primary">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>

      {/* Swap Button */}
      <button 
        onClick={onSwap} 
        className="text-white hover:text-primary transition-colors duration-300 transform hover:rotate-180 p-2"
        title="Swap Languages"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
        </svg>
      </button>

      {/* Target Pill */}
      <div className="relative group">
        <select 
          className="appearance-none bg-surface border border-glass-border text-white font-bold py-3 pl-6 pr-8 rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all text-sm uppercase tracking-wide hover:border-primary hover:bg-white/5"
          value={targetLang} 
          onChange={(e) => setTarget(e.target.value)}
        >
          {LANGUAGES.map(l => <option key={l.code} value={l.code} className="bg-background text-white">{l.name}</option>)}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;