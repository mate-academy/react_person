/* eslint-disable no-nested-ternary */
import React from 'react';

function DisplayPerson(person) {
  const part = !person.isMarried
    ? 'I am not married'
    : person.sex === 'm'
      ? `my wife's name is ${person.partnerName}`
      : `My husband's name is ${person.partnerName}`;

  return (
    <section className="Person">
      <h2 className="Person__name">
        My name is
        {' '}
        {person.name}
      </h2>
      <p className="Person__age">
        I am
        {' '}
        {person.age}
      </p>
      <p className="Person__partner">
        {part}
      </p>
    </section>
  );
}

export default DisplayPerson;
