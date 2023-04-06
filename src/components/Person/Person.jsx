import React from 'react';
import './Person.scss';

export const Person = ({ person }) => {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = person;

  const male = sex === 'm';

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {(Boolean(age)) && (
        <p className="Person__age">{`I am ${age}`}</p>
      )}
      {(!isMarried) && (
        <p className="Person__partner">I am not married</p>
      )}
      {
        <p className="Person__partner">
          {(male)
            ? `${partnerName} is my wife`
            : `${partnerName} is my husband`
          }
        </p>
      }
    </section>
  );
};
