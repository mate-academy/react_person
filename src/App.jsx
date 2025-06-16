import React from 'react';
import './App.scss';
import { Person } from './components/Person/Person';

const misha = {
  name: 'Misha',
  age: 25,
  sex: 'male',
  married: true,
  partner: 'Anna',
};

const anna = {
  name: 'Anna',
  sex: 'female',
  married: true,
  partner: 'Misha',
};

const kate = {
  name: 'Kate',
  age: 30,
  sex: 'female',
  married: false,
};

export function App() {
  return (
    <div>
      <Person person={misha} />
      <Person person={anna} />
      <Person person={kate} />
    </div>
  );
}
