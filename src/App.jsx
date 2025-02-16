import React from 'react';
import './App.scss';
import Person from './components/Person/Person';

// Definicje obiektów
export const misha = {
  name: 'Misha',
  age: 37,
  sex: 'm',
  isMarried: true,
  partnerName: 'Natasha',
};

export const olya = {
  name: 'Olya',
  sex: 'f',
  age: 38,
  isMarried: true,
  partnerName: 'Maksym',
};

export const alex = {
  name: 'Alex',
  age: 25,
  sex: 'm',
  isMarried: false,
  partnerName: null, // Brak partnera, aby wyświetlić komunikat "I am not married"
};

export const App = () => (
  <div className="App">
    <section className="Person">
      <Person person={misha} />
    </section>

    <section className="Person">
      <Person person={olya} />
    </section>

    <section className="Person">
      <Person person={alex} />
    </section>
  </div>
);
