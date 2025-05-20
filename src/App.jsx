import React from 'react';
import Person from './components/Person/Person';
import './App.scss';

export const misha = {
  name: 'Misha',
  age: 37,
  sex: 'M',
  isMarried: true,
  partnerName: 'Natasha',
};

export const olya = {
  name: 'Olya',
  sex: 'F',
  isMarried: true,
  partnerName: 'Maksym',
};

export const alex = {
  name: 'Alex',
  age: 25,
  sex: 'M',
  isMarried: false,
};

const App = () => {
  return (
    <div className="App">
      <Person person={misha} />
      <Person person={olya} />
      <Person person={alex} />
    </div>
  );
};

export default App;
