import React from 'react';

const InputCard = ({ text, isListening, langCode }) => (
  <div className={`relative w-full p-6 rounded-3xl backdrop-blur-xl border transition-all duration-500 min-h-[180px] flex flex-col justify-between group
    ${isListening 
      ? 'bg-black/40 border-primary shadow-[0_0_30px_rgba(0,242,234,0.15)]' 
      : 'bg-white/5 border-white/10 hover:border-white/20'
    }`}
  >
    <div className="flex justify-between items-center mb-4">
      <span className="text-[10px] font-black tracking-widest text-gray-400 uppercase">Input • {langCode}</span>
      {isListening && <span className="flex h-2 w-2 rounded-full bg-primary animate-ping"></span>}
    </div>
    
    <div className="text-2xl font-medium leading-relaxed text-white/90">
      {text || <span className="text-white/20 italic font-light">Tap the microphone and start speaking...</span>}
    </div>
  </div>
);

export default InputCard;