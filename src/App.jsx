import React from 'react';
import './App.scss';
import { Person } from './components/Person/Person';

// Дані для тестів: об'єкти з різним набором властивостей
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
  isMarried: true,
  partnerName: 'Maksym',
};

export const alex = {
  name: 'Alex',
  age: 25,
  sex: 'm',
  isMarried: false,
};

// eslint-disable-next-line no-lone-blocks
{
  /* Замість того, щоб передавати кожен проп окремо (name={misha.name} age={37}),
      ми передаємо весь об'єкт цілком через один проп "person".
      Це спрощує код та полегшує масштабування.
    */
}

export const App = () => (
  <div className="App">
    {/* Передаємо весь об'єкт одним пропом person */}
    <Person person={misha} />
    <Person person={olya} />
    <Person person={alex} />
  </div>
);
