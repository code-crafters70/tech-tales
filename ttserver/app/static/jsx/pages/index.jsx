import React from 'react';
import ReactDOM from 'react-dom';

const Teste = () => {
  return (
    <div>
      <h1>
        Hello, World!
      </h1>
    </div>
  );
};


ReactDOM.render(<Teste />, document.querySelector("body"));