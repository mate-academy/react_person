import React from 'react';
import { Person } from './Person/Person';
import persons from './app.json';
import './App.scss';

const App = () => (
  <div className="App">
    {persons.map(paragraph => (
      <Person
        key={paragraph.name}
        {...paragraph}
      />
    ))}
  </div>
);

export default App;
