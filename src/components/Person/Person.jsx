import React from 'react';

export const Person = ({ person }) => {
  const {
    name,
    age = null,
    sex,
    isMarried,
    partnerName,
  } = person;

  const personAge = age !== null
    && <p className="Person__age">{`I am ${age}`}</p>;

  const partnerSex = sex === 'm'
    ? 'wife'
    : 'husband';

  const marriedStatus = isMarried
    ? `${partnerName} is my ${partnerSex}`
    : 'I am not married';

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>

      {personAge}

      <p className="Person__partner">{marriedStatus}</p>
    </section>
  );
};
