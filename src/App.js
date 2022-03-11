import React from 'react';

import { Person } from './component/Person';
import './App.scss';

const App = () => (
  <div className="App">
    <Person
      name="Misha"
      age={37}
      sex="m"
      partnerName="Natasha"
      isMarried
    />

    <Person
      name="Olya"
      sex="f"
      partnerName="Maksym"
      isMarried
    />

    <Person
      name="Alex"
      age={25}
    />
  </div>
);

export default App;
