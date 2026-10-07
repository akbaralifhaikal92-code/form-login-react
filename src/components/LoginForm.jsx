import React, { useState } from 'react';

export default function LoginForm({
  username,
  setUsername,
  password,
  setPassword,
  status,
  isKicking,
  notification,
  onKick,
  onReset
}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="ground-section">
      <div className="login-card">
        <h2 className="form-header-title">ISIKAN DATA LOGIN</h2>
        <p className="form-header-desc">
          Goal = Login Berhasil | Melenceng = Login Gagal
        </p>

        {notification.message && (
          <div className={`notification-banner ${notification.type === 'success' ? 'banner-success' : 'banner-error'}`}>
            {notification.message}
          </div>
        )}

        <form onSubmit={onKick}>
          <div className="input-group">
            <label className="input-label">Username</label>
            <div className="input-field-wrapper">
              <span className="input-icon">👤</span>
              <input
                type="text"
                className="input-field"
                placeholder="Contoh: admin"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                disabled={isKicking || status === 'goal'}
              />
            </div>
          </div>

          <div className="input-group">
            <label className="input-label">Password</label>
            <div className="input-field-wrapper">
              <span className="input-icon">🔒</span>
              <input
                type={showPassword ? 'text' : 'password'}
                className="input-field"
                placeholder="Contoh: 123"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isKicking || status === 'goal'}
              />
              <button
                type="button"
                className="toggle-password-btn"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? '🙈' : '👁️'}
              </button>
            </div>
          </div>

          {status === 'idle' && (
            <button
              type="submit"
              className="btn-kick"
              disabled={isKicking || !username || !password}
            >
              {isKicking ? 'MENENDANG...' : 'TENDANG (LOGIN) ⚽'}
            </button>
          )}
        </form>

        {/* Box Uji Coba Kredensial */}
        <div className="credential-box">
          <div className="credential-header">
            <span>✨</span> Uji Coba Kredensial:
          </div>
          <div className="credential-values">
            Username: <span className="badge-code">admin</span> | Password: <span className="badge-code">123</span>
          </div>
        </div>

        {status !== 'idle' && (
          <button type="button" className="btn-reset" onClick={onReset}>
            🔄 Coba Lagi
          </button>
        )}
      </div>

      {/* Footer Text */}
      <div className="footer-text">
        Aplikasi Web React • Formulir Login Penalti Siang Hari
      </div>
    </div>
  );
}