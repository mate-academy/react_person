import React from 'react';
import './Person.scss';

export const Person = ({ person }) => (
  <section className="Person">
    <h2 className="Person__name">{`My name is ${person.name}`}</h2>
    {person.sex === 'm' && (
      <p className="Person__age">{`I am ${person.age}`}</p>
    )}
    {person.isMarried === true
      ? (
        <p className="Person__partner">
          My
          {person.sex === 'm' ? ` wife's ` : ` husband's `}
          {`name is `}
          {person.partnerName}
        </p>
      )
      : (<p className="Person__partner">I am not married</p>)
    }
  </section>
);
