import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export default () => {
  const [text, setText] = useState('Sample Text');

  const updateText = (text) => {
    setText(text);
  };

  return (
    <div className="App">
      <input
        type="text"
        onChange={(e) => updateText(e.target.value)}
        value={text}
      />
      <div className="App-copy-area">
        <CopyToClipboard
          text={text}
          onCopy={() => alert(`クリップボードに「${text}」をコピーしました！`)}
        >
          <button>クリップボードにコピーする</button>
        </CopyToClipboard>
      </div>
    </div>
  );
};