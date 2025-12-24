import React from 'react';

const OutputCard = ({ translatedText, langCode, onSave }) => (
  <div className="relative w-full p-6 rounded-3xl bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl border border-white/10 mt-16 min-h-[180px] flex flex-col justify-between group hover:border-primary/30 transition-colors duration-500">
    <div className="flex justify-between items-center mb-4">
      <span className="text-[10px] font-black tracking-widest text-primary uppercase">Translation • {langCode}</span>
    </div>

    <div className="text-2xl font-bold leading-relaxed text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">
      {translatedText || "..."}
    </div>

    {translatedText && (
      <button 
        onClick={onSave}
        className="self-end mt-4 px-4 py-2 rounded-xl text-xs font-bold text-black bg-primary hover:bg-white transition-colors flex items-center gap-2 shadow-neon"
      >
        <span>＋</span> Save to Vault
      </button>
    )}
  </div>
);

export default OutputCard;