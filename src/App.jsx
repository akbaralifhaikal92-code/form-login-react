import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import Stadium from './components/Stadium';
import LoginForm from './components/LoginForm';
import './App.css';

export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'goal' | 'miss'
  const [isKicking, setIsKicking] = useState(false);
  const [notification, setNotification] = useState({ type: '', message: '' });

  const triggerConfetti = () => {
    confetti({
      particleCount: 90,
      spread: 80,
      origin: { y: 0.4 }
    });
  };

  const handleKick = (e) => {
    e.preventDefault();
    if (!username || !password || isKicking) return;

    setIsKicking(true);
    setNotification({ type: '', message: '' });

    setTimeout(() => {
      setIsKicking(false);

      if (username === 'admin' && password === '123') {
        setStatus('goal');
        setNotification({
          type: 'success',
          message: '🎉 GOAAAL! Login Berhasil!'
        });
        triggerConfetti();
      } else {
        setStatus('miss');
        setNotification({
          type: 'error',
          message: '❌ Tendangan Melenceng! Username/Password Salah.'
        });
      }
    }, 800);
  };

  const handleReset = () => {
    setStatus('idle');
    setNotification({ type: '', message: '' });
  };

  return (
    <div className="stadium-wrapper">
      <Stadium status={status} />
      <LoginForm
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        status={status}
        isKicking={isKicking}
        notification={notification}
        onKick={handleKick}
        onReset={handleReset}
      />
    </div>
  );
}