import React from 'react';
import './App.scss';
import { Person } from './components/Person/Person';

export const App = () => (
  <div className="App">
    <Person
      person={{
        name: 'Misha',
        age: 37,
        sex: 'm',
        isMarried: true,
        partnerName: 'Natasha',
      }}
    />
    <Person
      person={{
        name: 'Olya',
        sex: 'f',
        isMarried: true,
        partnerName: 'Maksym',
      }}
    />
    <Person
      person={{
        name: 'Alex',
        age: 25,
        sex: 'm',
        isMarried: false,
      }}
    />
  </div>
);
