import React from 'react';

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  const personAge = age && <p className="Person__age">{`I am ${age}`}</p>;
  const partner = sex === 'm'
    ? 'wife'
    : 'husband';

  const personParthner = (
    <p className="Person__partner">{`${partnerName} is my ${partner}`}</p>
  );

  const unmarriedPerson = (
    <p className="Person__partner">I am not married</p>
  );

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>

      {personAge}

      {isMarried
        ? personParthner
        : unmarriedPerson }
    </section>
  );
};
