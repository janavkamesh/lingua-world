import React from 'react';

const MicButton = ({ isListening, onToggle }) => (
  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
    <div className="relative flex items-center justify-center">
      {/* Pulse Rings */}
      {isListening && (
        <>
          <div className="absolute w-full h-full rounded-full bg-red-500 opacity-20 animate-pulse-ring delay-75"></div>
          <div className="absolute w-full h-full rounded-full bg-red-500 opacity-20 animate-pulse-ring delay-1000"></div>
        </>
      )}
      
      {/* The Button */}
      <button 
        onClick={onToggle}
        className={`relative w-24 h-24 rounded-full flex items-center justify-center text-4xl shadow-2xl transition-all duration-300 border-[6px] 
          ${isListening 
            ? 'bg-red-500 border-red-600 text-white shadow-glow-red scale-110' 
            : 'bg-white border-gray-100 text-black hover:scale-105 hover:bg-primary hover:border-primary hover:shadow-glow-green'
          }`}
      >
        {isListening ? (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
            <path fillRule="evenodd" d="M4.5 7.5a3 3 0 013-3h9a3 3 0 013 3v9a3 3 0 01-3 3h-9a3 3 0 01-3-3v-9z" clipRule="evenodd" />
          </svg>
        ) : (
          <span className="text-3xl">🎙️</span>
        )}
      </button>
    </div>
  </div>
);

export default MicButton;