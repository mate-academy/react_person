import React from 'react';
import './App.scss';
import Person from './components/Person/Person';

export const App = () => (
  <div className="App">
    <Person
      name="Misha"
      age={37}
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
