import React from 'react';
import './Person.scss';

export const Person = ({ person }) => {
  let marriedText = '';

  if (person.isMarried && person.sex === 'f') {
    marriedText = `${person.partnerName} is my husband`;
  } else if (person.isMarried && person.sex === 'm') {
    marriedText = `${person.partnerName} is my wife`;
  } else {
    marriedText = 'I am not married';
  }

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>
      {person.age && <p className="Person__age">{`I am ${person.age}`}</p>}
      <p className="Person__partner">{marriedText}</p>
    </section>
  );
};
