import React from 'react';

export default function Stadium({ status }) {
  let ballClass = 'ball-spot';
  if (status === 'goal') ballClass = 'ball-goal';
  if (status === 'miss') ballClass = 'ball-miss';

  let keeperClass = 'keeper-center';
  if (status === 'goal') keeperClass = 'keeper-right';
  if (status === 'miss') keeperClass = 'keeper-left';

  return (
    <>
      {/* Sun & Clouds */}
      <div className="sun"></div>
      <div className="cloud cloud-left"></div>
      <div className="cloud cloud-right"></div>

      {/* Header Title */}
      <div className="header-section">
        <div className="badge-stadium">🔆 STADION SIANG HARI</div>
        <h1 className="main-title">FORMULIR LOGIN PENALTY</h1>
      </div>

      {/* Stage Container */}
      <div className="stage-container">
        {/* Gawang Jaring Biru */}
        <div className="goal-frame">
          {/* Kiper Vektor */}
          <div className={`keeper-vector ${keeperClass}`}>
            <div className="keeper-head-group">
              <div className="keeper-glove"></div>
              <div className="keeper-head"></div>
              <div className="keeper-glove"></div>
            </div>
            <div className="keeper-body">1</div>
            <div className="keeper-pants"></div>
            <div className="keeper-legs">
              <div className="keeper-foot"></div>
              <div className="keeper-foot"></div>
            </div>
          </div>
        </div>

        {/* Rumput Box */}
        <div className="pitch-box">
          <div className="penalty-arc"></div>

          {/* Bola Sepak Vector SVG */}
          <svg className={`soccer-ball ${ballClass}`} viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="48" fill="#ffffff" stroke="#000000" strokeWidth="4" />
            <polygon points="50,25 65,36 59,54 41,54 35,36" fill="#000000" />
            <polygon points="50,25 35,36 20,28 20,10 38,8" fill="#000000" />
            <polygon points="50,25 65,36 80,28 80,10 62,8" fill="#000000" />
            <polygon points="41,54 59,54 68,72 50,85 32,72" fill="#000000" />
            <polygon points="35,36 20,28 8,42 15,60 32,54" fill="#000000" />
            <polygon points="65,36 80,28 92,42 85,60 68,54" fill="#000000" />
          </svg>
        </div>
      </div>
    </>
  );
}