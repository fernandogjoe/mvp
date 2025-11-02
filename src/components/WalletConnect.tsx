import React from 'react'
import { useWalletKit } from '@mysten/wallet-kit'

export default function WalletConnect() {
  const { currentWallet, connect, disconnect } = useWalletKit()

  if (!currentWallet) {
    return (
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button
          onClick={() => connect('Slush')}
          style={{
            padding: '14px 28px',
            background: 'linear-gradient(90deg, #00ff88, #00d1ff)',
            color: 'white',
            border: 'none',
            borderRadius: '12px',
            fontWeight: 'bold',
            cursor: 'pointer',
            fontSize: '1.2rem',
            boxShadow: '0 0 15px rgba(0, 255, 136, 0.6)',
          }}
        >
          Connect with Slush
        </button>
      </div>
    )
  }

  // Safe address extraction
  const accounts = currentWallet.accounts || []
  const address = accounts.length > 0 ? accounts[0].address : 'No address found'
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <p style={{ color: '#00ff88', fontWeight: 'bold', fontSize: '1.2rem' }}>
        Connected: {address.slice(0, 6)}...{address.slice(-4)}
      </p>
      <button
        onClick={disconnect}
        style={{
          padding: '10px 20px',
          background: '#ff4444',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
        }}
      >
        Disconnect
      </button>
    </div>
  )
}