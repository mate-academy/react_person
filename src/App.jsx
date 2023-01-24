import React from 'react';
import './App.scss';

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

const userData = [misha, olya, alex];

export const App = () => (
  <div className="App">
    {userData.map(user => (
      <section className="Person">
        <h2 className="Person__name">{`My name is ${user.name}`}</h2>
        <p className="Person__partner">
          {user.isMarried
            ? `${user.partnerName} is my ${user.sex === 'm' ? 'wife' : 'husband'}`
            : 'I am not married'}
        </p>
      </section>
    ))}
  </div>
);
