import React from 'react';
import { Person } from './components/Person/Person';
import './App.scss';
import { misha, olya, alex } from './components/Person/PersonList';

export const App = () => (
  <>
    <Person person={misha} />

    <Person person={olya} />

    <Person person={alex} />
  </>
);
