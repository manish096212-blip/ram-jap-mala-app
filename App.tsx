
import React from 'react';

/**
 * Note: Per user requirements for a PURE OFFLINE app compatible with Android WebView (AppsGeyser),
 * the primary functional code is provided in index.html. 
 * This React component serves as a fallback or entry point if loaded in a React context.
 */
const App: React.FC = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', textAlign: 'center', padding: '20px' }}>
      <div>
        <h1>Divya Jap Mala</h1>
        <p>Please open index.html directly for the full offline experience.</p>
        <a href="index.html" style={{ color: '#FF9933', fontWeight: 'bold' }}>Launch App</a>
      </div>
    </div>
  );
};

export default App;
