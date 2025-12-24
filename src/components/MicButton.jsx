import React from 'react';

const MicButton = ({ isListening, onToggle }) => (
  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
    {/* Animated Ring */}
    <div className={`absolute top-0 left-0 w-full h-full rounded-full bg-secondary opacity-20 blur-xl transition-all duration-300 ${isListening ? 'scale-150 animate-pulse' : 'scale-100'}`}></div>
    
    <button 
      onClick={onToggle}
      className={`relative w-24 h-24 rounded-full flex items-center justify-center text-3xl shadow-2xl transition-all duration-300 border-4 
        ${isListening 
          ? 'bg-secondary border-secondary text-white shadow-neon-red scale-110' 
          : 'bg-white border-white/10 text-black hover:scale-105 hover:bg-primary hover:border-primary hover:shadow-neon'
        }`}
    >
      {isListening ? '⏹' : '🎙️'}
    </button>
  </div>
);

export default MicButton;