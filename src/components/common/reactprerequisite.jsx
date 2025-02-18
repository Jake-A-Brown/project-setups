import React from 'react';
import TerminalCard from '../../components/terminalcard/terminalcard';

const ReactPrerequisite = () => {
  return (
    <div>
      <h3>React Project Prerequisites</h3>
      
      <h4>1. Install Node.js</h4>
      <p>
        Download and install Node.js from the official website: 
        <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer"> Node.js Download</a>
      </p>
      <p>After installation, verify it using the following command:</p>
      <TerminalCard terminaltext="node -v" />
      <p>If you see a version number (e.g., v18.16.0), Node.js is installed correctly.</p>

      <h4>2. Install VS Code</h4>
      <p>
        Download and install Visual Studio Code (VS Code) from:
        <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer"> VS Code Download</a>
      </p>
      <p>VS Code is a popular text editor for JavaScript and React development.</p>
    </div>
  );
};

export default ReactPrerequisite;
