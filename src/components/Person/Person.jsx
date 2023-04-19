import React from 'react';

export const Person = ({ person }) => {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = person;

  const partnerGender = sex === 'm'
    ? 'wife'
    : 'husband';

  const personPartner = isMarried
    ? `${partnerName} is my ${partnerGender}`
    : 'I am not married';

  const personAge = age
    ? (
      <p className="Person__age">
        {`I am ${age}`}
      </p>
    )
    : null;

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>

      {personAge}

      <p className="Person__partner">
        {personPartner}
      </p>
    </section>
  );
};
