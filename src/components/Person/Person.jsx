/* eslint-disable consistent-return */
import React from 'react';

function Person({
  person,
}) {
  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${person.name}`}</h2>
      {person.age && (
        <p className="Person__age">{`I am ${person.age}`}</p>
      )}
      <p className="Person__partner">{checkStatusMarriage(person)}</p>
    </section>
  );
}

function checkStatusMarriage(person) {
  if (!person.isMarried) {
    return 'I am not married';
  }

  if (person.sex === 'm') {
    return `${person.partnerName} is my wife`;
  }

  if (person.sex === 'f') {
    return `${person.partnerName} is my husband`;
  }
}

export { Person };
