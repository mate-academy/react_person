import React from 'react';
import './App.scss';
import { Person } from './components/Person/Person';

export const App = () => {
  const people = [
    {
      id: '1',
      name: 'Misha',
      age: 37,
      sex: 'm',
      isMarried: true,
      partnerName: 'Natasha',
    },
    {
      id: '2',
      name: 'Olya',
      age: 38,
      sex: 'f',
      isMarried: true,
      partnerName: 'Maksym',
    },
    { id: '3', name: 'Alex', age: 25, sex: 'm', isMarried: false },
  ];

  return (
    <div>
      {people.map(({ id, name, age, sex, isMarried, partnerName }) => (
        <Person
          key={id}
          person={{ id, name, age, sex, isMarried, partnerName }}
        />
      ))}
    </div>
  );
};

export default App;
