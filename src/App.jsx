import React from 'react';
import './App.scss';
import { Person } from './components/Person/Person';
import { alex, Misha, olya } from './components/database';

export const App = () => (
  <>
    <Person person={Misha} />
    <Person person={olya} />
    <Person person={alex} />
  </>
);
