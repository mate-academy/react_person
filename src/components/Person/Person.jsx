import React from 'react';
import './Person.scss';

const personStatus = (sex) => {
  const partner = sex === 'm' ? 'wife' : 'husband';

  return partner;
};

export const Person = ({ person }) => (
  <section className="Person">
    <h2 className="Person__name">{`My name is ${person.name}`}</h2>

    <p className={`${person.age ? `Person__age` : ''}`}>
      {`${person.age ? `I am ${person.age}` : ``}`}
    </p>

    <p className="Person__partner">
      {`${
        person.isMarried
          ? `${person.partnerName} is my ${personStatus(person.sex)}`
          : `I am not married`
      }`}
    </p>
  </section>
);
