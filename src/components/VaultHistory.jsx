import React from 'react';

const VaultHistory = ({ history }) => {
  if (history.length === 0) return null;

  return (
    <div className="w-full flex flex-col gap-4">
      <h3 className="text-center text-[10px] uppercase font-bold text-gray-500 tracking-[3px] mb-2">
        Recent Vault History
      </h3>
      
      {history.map((item) => (
        <div key={item.id} className="bg-white/5 border border-white/5 rounded-2xl p-5 hover:bg-white/10 hover:border-white/10 transition-colors">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-black text-secondary uppercase bg-secondary/10 px-2 py-0.5 rounded text-center min-w-[30px]">
              {item.src}
            </span>
            <span className="text-gray-500 text-xs">→</span>
            <span className="text-xs font-black text-primary uppercase bg-primary/10 px-2 py-0.5 rounded text-center min-w-[30px]">
              {item.tgt}
            </span>
          </div>
          
          <p className="text-gray-400 text-sm mb-1 line-clamp-1">{item.en}</p>
          <p className="text-white font-medium text-lg line-clamp-2">{item.tr}</p>
        </div>
      ))}
    </div>
  );
};

export default VaultHistory;