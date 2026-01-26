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
      <Person
        name="Misha"
        age={25}
        partnerName="Natasha"
      />

      <Person
      name="Olya"
      partnerName="Maksym"
      />

      <Person
      name="Alex"
      age={25}
      />
    </div>
  );
}

export default App;
