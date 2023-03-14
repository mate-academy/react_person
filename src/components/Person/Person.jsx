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

  const partnerStatus = sex === 'm'
    ? 'wife'
    : 'husband';

  const familyStatus = isMarried
    ? `${partnerName} is my ${partnerStatus}`
    : 'I am not married';

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
        {familyStatus}
      </p>
    </section>
  );
};
