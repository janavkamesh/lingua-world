import React from 'react';

const InputCard = ({ text, isListening, langCode }) => (
  <div className={`relative w-full p-8 rounded-[35px] backdrop-blur-2xl transition-all duration-500 border min-h-[200px] flex flex-col
    ${isListening 
      ? 'bg-black/60 border-primary shadow-glow-green' 
      : 'bg-black/30 border-glass-border hover:border-white/20'
    }`}
  >
    <div className="flex justify-between items-center mb-6">
      <span className="text-[10px] font-extrabold tracking-[2px] text-gray-400 uppercase">
        Original Input • {langCode}
      </span>
      {isListening && (
        <div className="flex items-center gap-2">
           <span className="text-[10px] font-bold text-primary animate-pulse">LISTENING</span>
           <span className="relative flex h-2 w-2">
             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
             <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
           </span>
        </div>
      )}
    </div>
    
    <div className="text-2xl md:text-3xl font-medium leading-relaxed text-white/90 break-words">
      {text || <span className="text-white/10 italic font-light text-xl">Tap the mic and say something...</span>}
    </div>
  </div>
);

export default InputCard;