import React from 'react';
import './App.scss';
import { Person, misha, olya, alex } from './components/Person/Person';

export const App = () => (
  <>
    <Person person={misha} />
    <Person person={olya} />
    <Person person={alex} />
  </>
);
