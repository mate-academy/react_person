import React from 'react';
import './App.scss';
import Person from './components/Person/Person';

function App() {
  const misha = {
    name: 'Misha',
    age: 25,
    partnerName: 'Jane',
    gender: 'male'
  };

  const olya = {
    name: 'Olya',
    partnerName: 'Maksym',
    gender: 'female'
  };

  const alex = {
  name: 'Alex',
  age: 25,
  sex: 'm',
  isMarried: false,
};

  return (
    <div className="App">
      <Person person={misha} />

      <Person person={olya} />

      <Person person={alex} />
    </div>
  );
}

export default App;
