import React from 'react';
import './App.scss';
import Person from './components/Person/Person';
import { people } from './components/Person/data';

export const App = () => (
  people.map(item => <Person person={item} key={item.id} />)
);
