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

function Person({ name, age, sex, isMarried, partnerName }) {
  let partner = '';

  if (sex === 'm') {
    partner = 'wife';
  } else {
    partner = 'husband';
  }

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      <p className="Person__age">
        {!age ? (
          ''
        ) : (
          `I am ${age}`
        )
        }
      </p>
      <p>
        {!isMarried ? (
          `I am not married`
        ) : (
          `I have a ${partner}`
        )}
      </p>
      <p>{partnerName}</p>
    </section>
  );
}

export const App = () => (
  <div className="App">
    <Person {...misha} />
    <Person {...olya} />
    <Person {...alex} />
  </div>
);
