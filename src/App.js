import React from 'react';
import './components/Person.scss';
import {
  Person, misha, olya, alex,
} from './components/Person';

const App = () => (
  <div className="App">
    <Person person={misha} />
    <Person person={olya} />
    <Person person={alex} />
  </div>
);

export default App;
