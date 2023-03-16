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

  const spouseTitle = sex === 'm' ? 'wife' : 'husband';
  const personPartnerText = isMarried
    ? `${partnerName} is my ${spouseTitle}`
    : 'I am not married';

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>

      {age && (
      <p className="Person__age">
        { `I am ${age}` }
      </p>
      )}
      <p className="Person__partner">
        {personPartnerText}
      </p>
    </section>
  );
};
