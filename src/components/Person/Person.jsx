import React from 'react';
import './Person.scss';

function Item({ sex, name }) {
  let itemContent = `${name} is my husband`;

  if (sex === 'm') {
    itemContent = `${name} is my wife`;
  }

  return (
    <p className="Person__partner">{itemContent}</p>
  );
}

export const Person = ({ person }) => (
  <section className="Person">
    <h2 className="Person__name">{`My name is ${person.name}`}</h2>

    {person.age && <p className="Person__age">{`I am ${person.age}`}</p>}

    {person.isMarried
      ? <Item sex={person.sex} name={person.partnerName} />
      : <p className="Person__partner">I am not married</p>}
  </section>
);
