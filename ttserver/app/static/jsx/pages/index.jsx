import React from 'react';
import ReactDOM from 'react-dom';

const Teste = () => {
  return (
    <div>
      <h1>
        Hello, World!
      </h1>
      <p>Olá!</p>
    </div>
  );
};


ReactDOM.render(<Teste />, document.querySelector("body"));