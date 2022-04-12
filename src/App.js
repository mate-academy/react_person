import React from 'react';
import Person from './components/Person';
import './components/Person.scss';

const App = () => (
  <div className="App">
    <Person
      name="Misha"
      age={30}
      sex="m"
      partnerName="Natasha"
    />

    <Person
      name="Olya"
      sex="f"
      partnerName="Maksym"
    />

    <Person
      name="Alex"
      age={25}
      sex="m"
      isMarried={false}
    />
  </div>
);

export default App;
