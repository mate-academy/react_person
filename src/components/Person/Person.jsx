import React from 'react';

export const Person = ({ person }) => {
  const partnerStatus = person.sex === 'm' ? 'wife' : 'husband';
  const marriedText = person.isMarried
    ? `${person.partnerName} is my ${partnerStatus}`
    : `I am not married`;

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${person.name}`}</h2>

      {!person.age ? '' : <p className="Person__age">{`I am ${person.age}`}</p>}

      <p className="Person__partner">{marriedText}</p>
    </section>
  );
};

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
