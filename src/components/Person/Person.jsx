import React from 'react';
import './Person.scss';

const personStatus = (sex) => {
  const partner = sex === 'm' ? 'wife' : 'husband';

  return partner;
};

export const Person = ({ person }) => {
  const { name, age, sex, partnerName } = person;

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>

      {age ? (
        <p className="Person__age">
          {`I am ${age}`}
        </p>
      )
        : ''
      }

      <p className="Person__partner">
        {`${
          person.isMarried
            ? `${partnerName} is my ${personStatus(sex)}`
            : `I am not married`
        }`}
      </p>
    </section>
  );
};
