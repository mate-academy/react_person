// export const Person = ({ person }) => ();
import React from 'react';

export const Person = ({ person }) => (
  <section className="Person">
    <h2 className="Person__name">{`My name is ${person.name}`}</h2>
    {person.age && (
      <span className="Person__age">
        I am
        {` ${person.age}` }
      </span>
    )}
    {person.isMarried
      ? (
        <p className="Person__partner">
          {person.sex === 'm'
            ? `${person.partnerName} is my wife`
            : `${person.partnerName} is my husband`
         }
        </p>
      ) : (
        <p className="Person__partner">I am not married</p>
      )}
  </section>
);
