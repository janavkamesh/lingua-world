import React from 'react';

const VaultHistory = ({ history }) => (
  <section className="vault-section">
    <h2 className="vault-title">Vault Records</h2>
    <div className="vault-list">
      {history.length === 0 && <p className="empty">No conversations saved.</p>}
      {history.map(item => (
        <div key={item.id} className="vault-item">
          <span className="v-langs">{item.src} → {item.tgt}</span>
          <p className="v-orig">{item.en}</p>
          <p className="v-trans">{item.tr}</p>
        </div>
      ))}
    </div>
  </section>
);

export default VaultHistory;