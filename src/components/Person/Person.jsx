import React from 'react';

const Married = ({ person }) => {
  if (!person.isMarried) {
    return <p className="Person__partner">I am not married</p>;
  }

  return (
    <p className="Person__partner">
      {`${person.partnerName} is my ${person.sex === 'm' ? 'wife' : 'husband'}`}
    </p>
  );
};

function Age({ person }) {
  if (!person.age) {
    return null;
  }

  return (
    <p className="Person__age">
      {
      person.age && `I am ${person.age}`
      }
    </p>
  );
}

export const Person = ({ person }) => (
  <section className="Person">
    <h2 className="Person__name">
      {`My name is ${person.name}`}
    </h2>
    <Age person={person} />
    <Married person={person} />
  </section>
);
