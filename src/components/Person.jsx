import React from 'react';
import './Person.scss';

export const Person = ({ name, age, sex, isMarried, partnerName }) => (
  <section className="Person">
    {name && (
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>
    )}
    {age && (
      <p className="Person__age">
        {`I am ${age}`}
      </p>
    )}
    <p className="Person__partner">
      {!isMarried ? 'I am not married'
        : `My
      ${isMarried && ((sex === 'm' && 'wife')
          || (sex === 'f' && 'husband'))}'s name is
      ${partnerName}`
      }
    </p>
  </section>
);
