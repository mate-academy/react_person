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

  const spouse = isMarried
    && sex === 'm'
    ? 'wife'
    : 'husband';

  const martialStatus = isMarried
    ? `${partnerName} is my ${spouse}`
    : 'I am not married';

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>

      {age && age !== 0 && (
        <p className="Person__age">
          {`I am ${age}`}
        </p>
      )}

      <p className="Person__partner">
        {martialStatus}
      </p>
    </section>
  );
};
