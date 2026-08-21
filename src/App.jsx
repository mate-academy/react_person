import React from 'react';
import Person from './components/Person/Person';
import './App.scss';

const misha = {
  name: 'Misha',
  age: 30,
  isMarried: true,
  sex: 'm',
  partnerName: 'Olya',
};

const olya = {
  name: 'Olya',
  age: 28,
  isMarried: true,
  sex: 'f',
  partnerName: 'Misha',
};

const alex = {
  name: 'Alex',
  isMarried: false,
  sex: 'm',
};

export function App() {
  return (
    <div className="App">
      <Person person={misha} />
      <Person person={olya} />
      <Person person={alex} />
    </div>
  );
}

export default App;
