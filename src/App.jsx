import React from 'react';
import { Person, misha, olya, alex } from './components/Person';

export const App = () => (
  <div className="App">
    <Person 
      person={misha}
    />

    <Person
      person={olya}
    />

    <Person
      person={alex}
    />
  </div>
);
