import React from "react";
import "./terminalcard.css";

const TerminalCard = ({ terminaltext }) => {
  const copyToClipboard = () => {
    const textToCopy = Array.isArray(terminaltext) ? terminaltext.join("\n") : terminaltext;
    navigator.clipboard.writeText(textToCopy);
    alert("Copied:\n" + textToCopy);
  };

  return (
    <div className="terminal-card">
      <pre>
        {Array.isArray(terminaltext)
          ? terminaltext.map((line, index) => <div key={index}>{line}</div>)
          : terminaltext}
      </pre>
      <button onClick={copyToClipboard} className="copy-button">
        Copy
      </button>
    </div>
  );
};

export default TerminalCard;
