import React from 'react';
import './App.scss';
import { Person } from './components/Person/Person';

import { misha } from './components/People/Misha';
import { olya } from './components/People/Olya';
import { alex } from './components/People/Alex';

export const App = () => (
  <>
    <Person person={misha} />
    <Person person={olya} />
    <Person person={alex} />
  </>
);
