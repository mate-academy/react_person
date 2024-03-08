import React from 'react';
import { people } from './components/Person/People';
import { Person } from './components/Person/Person';
import './App.scss';

export const App = () => (
  <div className="App">
    {people.map(person => {
      return <Person person={person} />;
    })}
  </div>
);
