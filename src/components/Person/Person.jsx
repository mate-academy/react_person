import React from 'react';
import './Person.scss';

let partnerStatus;

export const Person = ({ person: {
  name,
  age,
  sex,
  isMarried,
  partnerName,
} }) => (
  <section className="Person">
    <h2 className="Person__name">{`My name is ${name}`}</h2>

    {age > 0
      && <p className="Person__age">{`I am ${age}`}</p>
    }

    {
      (partnerStatus = sex === 'm'
        ? 'wife'
        : 'husband') && false
    }

    <p className="Person__partner">
      {isMarried
        ? (
          `${partnerName} is my ${partnerStatus}`
        )
        : 'I am not married'
      }
    </p>
  </section>
);
