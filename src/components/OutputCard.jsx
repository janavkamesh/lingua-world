import React from 'react';

const OutputCard = ({ translatedText, langCode, onSave }) => (
  <div className="relative w-full p-8 rounded-[35px] bg-gradient-to-br from-white/5 to-transparent backdrop-blur-2xl border border-glass-border mt-16 min-h-[200px] flex flex-col justify-between transition-all duration-500 hover:shadow-2xl hover:border-secondary/30">
    
    <div className="flex justify-between items-center mb-4">
      <span className="text-[10px] font-extrabold tracking-[2px] text-secondary uppercase">
        Translation • {langCode}
      </span>
    </div>

    <div className="text-2xl md:text-3xl font-bold leading-relaxed text-transparent bg-clip-text bg-gradient-to-r from-primary to-white break-words drop-shadow-sm">
      {translatedText || "..."}
    </div>

    {translatedText && (
      <button 
        onClick={onSave}
        className="self-end mt-6 px-5 py-2.5 rounded-2xl text-xs font-bold text-primary bg-primary/10 border border-primary/20 hover:bg-primary hover:text-black hover:shadow-glow-green transition-all duration-300 flex items-center gap-2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
          <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
        </svg>
        SAVE TO VAULT
      </button>
    )}
  </div>
);

export default OutputCard;