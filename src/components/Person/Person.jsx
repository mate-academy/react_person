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
  const partner = (sex === 'f')
    ? 'husband\'s'
    : 'wife\'s';
  const partnerText = isMarried
    ? `My ${partner} name is ${partnerName}`
    : 'I am not married';

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>

      {age && <p className="Person__age">{`I am ${age}`}</p>}

      <p className="Person__partner">
        {partnerText}
      </p>
    </section>
  );
};
