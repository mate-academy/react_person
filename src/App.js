import React from 'react';
import './App.scss';
import Person from './components/Person';

const people = [{
  name: 'Misha',
  age: 37,
  sex: 'm',
  isMarried: true,
  partnerName: 'Natasha',
}, {
  name: 'Olya',
  sex: 'f',
  isMarried: true,
  partnerName: 'Maksym',
}, {
  name: 'Alex',
  age: 25,
  sex: 'm',
  isMarried: false,
}];

const App = () => (
  <div className="App">
    {people.map(person => (
      <Person
        {...person}
      />
    ))}
  </div>
);

export default App;
