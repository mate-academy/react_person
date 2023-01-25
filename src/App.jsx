import React from 'react';
import './App.scss';
import { Person } from './components/Person/Person';
import { listOfPerson } from './components/ListOfPerson/ListOfPerson';

export const App = () => (
  <div className="App">
    <Person person={listOfPerson.misha} />
    <Person person={listOfPerson.olya} />
    <Person person={listOfPerson.alex} />
  </div>
);
