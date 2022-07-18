// export function Person({ person }) {}
import React from 'react';

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName: pN } = person;

  const partnerHandler = () => {
    if (isMarried && sex === 'm') {
      return `My wife\`s name is ${pN}`;
    }

    if (isMarried && sex === 's') {
      return `My husbands\`s name is ${pN}`;
    }

    return `I am not married`;
  };

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      { age
        && <p className="Person__age">{`I am ${age}`}</p>
      }
      <p className="Person__partner">
        {partnerHandler()}
      </p>
    </section>
  );
};
