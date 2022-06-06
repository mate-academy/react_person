/* eslint-disable */
import React from 'react';
import './App.scss';
import Person from './components/Person/Person';
// eslint-disable-next-line
const misha = {
  name: 'Misha',
  age: 37,
  sex: 'm',
  isMarried: true,
  partnerName: 'Natasha',
};

// eslint-disable-next-line
const olya = {
  name: 'Olya',
  sex: 'f',
  isMarried: true,
  partnerName: 'Maksym',
};

// eslint-disable-next-line
const alex = {
  name: 'Alex',
  age: 25,
  sex: 'm',
  isMarried: false,
};

const Persons = [misha, olya, alex];

const App = () => (
  <div className="App">
    {
      Persons.map(person => {
        return <Person
          name= {person.name}
          age= {person.age}
          married= {person.isMarried}
          sex= {person.sex}
          partner= {person.partnerName}
          key= {person.name}
        />;
      })
    }
  </div>
);

export default App;
