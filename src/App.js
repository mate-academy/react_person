import React from 'react';
import './App.scss';
import Person from './Person';

const App = () => (
  <div className="App">
    <Person
      name="Misha"
      age={37}
      sex="m"
      isMarried
      partnerName="Natasha"
    />

    <Person
      name="Olya"
      sex="f"
      isMarried
      partnerName="Maksym"
    />

    <Person
      name="Alex"
      age={25}
      sex="m"
    />
  </div>
);

export default App;
