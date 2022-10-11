import React from 'react';

export const Person = ({ person }) => {
  let partner;

  if (person.isMarried) {
    if (person.sex === 'm') {
      partner = `${person.partnerName} is my wife`;
    } else {
      partner = `${person.partnerName} is my husband`;
    }
  } else {
    partner = `I am not married`;
  }

  if (!person.age) {
    return (
      <section className="Person">
        <h2 className="Person__name">{`My name is ${person.name}`}</h2>
        <p className="Person__partner">{partner}</p>
      </section>
    );
  }

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${person.name}`}</h2>
      <p className="Person__age">{`I am ${person.age}`}</p>
      <p className="Person__partner">{partner}</p>
    </section>
  );
};
