import React from 'react';
import './Person.scss';

function identifyMarriage(partnerName, sex, isMarried) {
  if (!isMarried) {
    return 'I am not married';
  }

  if (sex === 'f') {
    return `${partnerName} is my husband`;
  }

  return `${partnerName} is my wife`;
}

export const Person = ({ person }) => {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = person;

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>
      {age > 0 && (
        <p className="Person__age">
          {`I am ${age}`}
        </p>
      )}

      <p className="Person__partner">
        {identifyMarriage(partnerName, sex, isMarried)}
      </p>
    </section>
  );
};
