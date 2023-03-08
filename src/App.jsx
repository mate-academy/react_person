import React from 'react';
import './App.scss';
import Box from '@mui/material/Box';
import { Person } from './components/Person/Person';

export const people = [
  {
    name: 'Misha',
    age: 37,
    sex: 'm',
    isMarried: true,
    partnerName: 'Natasha',
  },

  {
    name: 'Olya',
    sex: 'f',
    isMarried: true,
    partnerName: 'Maksym',
  },

  {
    name: 'Alex',
    age: 25,
    sex: 'm',
    isMarried: false,
  },
];

export const App = () => (
  <Box sx={{
    display: 'flex',
    gap: 4,
    height: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
  }}
  >
    {people.map(person => (
      <Person key={person.name} person={person} />
    ))}
  </Box>
);
