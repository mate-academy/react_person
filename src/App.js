import React from 'react';
import './App.scss';
import { InfoAboutPerson } from './components/InfoAboutPerson';

const misha = {
  name: 'Misha',
  age: 37,
  sex: 'm',
  isMarried: true,
  partnerName: 'Natasha',
};

const olya = {
  name: 'Olya',
  sex: 'f',
  isMarried: true,
  partnerName: 'Maksym',
};

const alex = {
  name: 'Alex',
  age: 25,
  sex: 'm',
  isMarried: false,
};

const App = () => (
  <div className="App">
    <InfoAboutPerson person={misha} />
    <InfoAboutPerson person={olya} />
    <InfoAboutPerson person={alex} />
  </div>
);

export default App;
