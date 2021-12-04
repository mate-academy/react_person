import React from 'react';
import './Person.scss';

export const Person = ({ name, age, sex, partnerName }) => {
  const wifeOrHusband = sex === 'f' ? 'husband' : 'wife';

  return (
    <section className="person">
      <h2 className="person__name">
        {`My name is ${name}`}
      </h2>
      {age && (
        <p className="person__age">
          {`I am ${age}`}
        </p>
      )}
      <p className="person__partner">
        {partnerName
          ? `My ${wifeOrHusband}'s name is ${partnerName}`
          : 'I am not married'}
      </p>
    </section>
  );
};
