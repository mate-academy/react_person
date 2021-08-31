import React from 'react';
import ReactDOM from 'react-dom';
import { App, misha, olya, alex } from './App';

ReactDOM.render(
  <>
    <App person={misha} />
    <App person={olya} />
    <App person={alex} />
  </>,
  document.getElementById('root'),
);
