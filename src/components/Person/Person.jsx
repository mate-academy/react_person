import React from 'react';

export const Person = ({
  person: {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  },
}) => (
  <section className="Person">

    <h2 className="Person__name">
      {`My name is ${name}`}
    </h2>

    <p className="Person__age">
      {age ? `I am ${age}` : ''}
    </p>

    <p className="Person__partner">
      {isMarried
        ? `My ${sex === 'm' ? 'wife' : 'husband'}'s name is ${partnerName}`
        : 'I am not married'}
    </p>

  </section>
);
