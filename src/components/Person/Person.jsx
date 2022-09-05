/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

function Person({
  person,
}) {
  let message = '';

  if (!person.isMarried) {
    message = 'I am not married';
  }

  if (person.isMarried && person.sex === 'm') {
    message = `${person.partnerName} is my wife`;
  }

  if (person.isMarried && person.sex === 'f') {
    message = `${person.partnerName} is my husband`;
  }

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>
      {person.age && (
        <p className="Person__age">I am {person.age}</p>
      )}
      <p className="Person__partner">{message}</p>
    </section>
  );
}

export { Person };
