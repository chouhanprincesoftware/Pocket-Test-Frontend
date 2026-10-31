import React, { useState } from 'react';

export default function App() {
  const [selectedTab, setSelectedTab] = useState('dashboard');
  const [testing, setTesting] = useState(false);
  const [progress, setProgress] = useState(0);

  const startTest = () => {
    setTesting(true);
    setProgress(20);
    setTimeout(() => setProgress(60), 1000);
    setTimeout(() => {
      setProgress(100);
      setTesting(false);
    }, 2000);
  };

  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#0f172a', color: '#fff', minHeight: '100vh', padding: '20px' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #334155', paddingBottom: '15px', marginBottom: '20px' }}>
        <h2>📱 PocketTest AI - Hackathon Prototype</h2>
        <span style={{ background: '#22c55e20', color: '#22c55e', padding: '5px 10px', borderRadius: '5px', fontSize: '14px' }}>● Ready for Demo</span>
      </header>

      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <button onClick={() => setSelectedTab('dashboard')} style={{ padding: '10px 15px', background: selectedTab === 'dashboard' ? '#6366f1' : '#1e293b', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Dashboard</button>
        <button onClick={() => setSelectedTab('simulator')} style={{ padding: '10px 15px', background: selectedTab === 'simulator' ? '#6366f1' : '#1e293b', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Test Simulator</button>
      </div>

      {selectedTab === 'dashboard' ? (
        <div>
          <h3>Ranked User-Impact Failures (Cheap Phone Test)</h3>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '15px', background: '#1e293b', borderRadius: '8px', overflow: 'hidden' }}>
            <thead>
              <tr style={{ background: '#334155', textAlign: 'left' }}>
                <th style={{ padding: '12px' }}>Issue Name</th>
                <th style={{ padding: '12px' }}>Condition</th>
                <th style={{ padding: '12px' }}>Severity</th>
                <th style={{ padding: '12px' }}>Est. Indian Reach</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid #334155' }}>
                <td style={{ padding: '12px' }}>Login Timeout on Slow Network</td>
                <td style={{ padding: '12px' }}>2G / Weak Data</td>
                <td style={{ color: '#ef4444', padding: '12px' }}>Critical</td>
                <td style={{ padding: '12px' }}>38.5% Users</td>
              </tr>
              <tr>
                <td style={{ padding: '12px' }}>App Crash on Low RAM Devices</td>
                <td style={{ padding: '12px' }}>1.5GB / 2GB RAM</td>
                <td style={{ color: '#f97316', padding: '12px' }}>High</td>
                <td style={{ padding: '12px' }}>24.2% Users</td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <div style={{ background: '#1e293b', padding: '20px', borderRadius: '8px' }}>
          <h3>Run New Test Harness</h3>
          <p style={{ color: '#94a3b8' }}>Select budget device profile and network condition to test APK.</p>
          <div style={{ margin: '15px 0' }}>
            <label>Select Network: </label>
            <select style={{ padding: '8px', background: '#0f172a', color: '#fff', border: '1px solid #334155', borderRadius: '4px' }}>
              <option>Slow 2G / Unstable Data</option>
              <option>Intermittent 3G</option>
            </select>
          </div>
          <button onClick={startTest} disabled={testing} style={{ padding: '10px 20px', background: '#6366f1', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
            {testing ? 'Running Tests...' : 'Start Automated Test'}
          </button>
          {testing && <p style={{ marginTop: '10px', color: '#38bdf8' }}>Executing ADB scripts... Progress: {progress}%</p>}
        </div>
      )}
    </div>
  );
}