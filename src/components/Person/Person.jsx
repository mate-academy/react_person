import React from 'react';

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  const PersonAge = () => (
    age
      ? <p className="Person__age">{`I am ${age}`}</p>
      : ''
  );

  const PersonParthner = () => (
    <p className="Person__partner">
      {`${partnerName} is my `}
      {sex === 'm' ? 'wife' : 'husband'}
    </p>
  );

  const UnmarriedPerson = () => (
    <p className="Person__partner">I am not married</p>
  );

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      <PersonAge />
      {isMarried
        ? <PersonParthner />
        : <UnmarriedPerson />}
    </section>
  );
};
