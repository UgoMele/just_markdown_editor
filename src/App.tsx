import React, { useState } from 'react';

import MarkdownRenderer from './components/MarkdownRender.tsx';

import './App.css';

function App() {

  const [mdInput, setMdInput] = useState('');

  return (
    <div className="App">
      <header>
        <h1>MD Editor</h1>
      </header>
      <nav>

      </nav>
      <main>
        <div className="wrapper">
          <textarea 
            className="editor"
            autoFocus
            value={mdInput}
            onChange={(e) => setMdInput(e.target.value)}
            placeholder="write here..." />
        </div>
        <div className="sep-bar" />
        <div className="render wrapper">
          <MarkdownRenderer>{mdInput}</MarkdownRenderer>
        </div>
      </main>
    </div>
  );
}

export default App;
