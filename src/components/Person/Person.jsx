import React from 'react';
import './Person.scss';

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is: ${name}`}
      </h2>

      {age && (
        <p className="Person__age">
          {`My age is: ${age}`}
        </p>
      )}

      {isMarried ? (
        <p>
          {`${partnerName} is my ${sex === 'f' ? 'husband' : 'wife'}`}
        </p>
      ) : (
        <p>
          I am not married
        </p>
      )}
    </section>
  );
};
