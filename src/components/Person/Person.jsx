import React from 'react';

export const Person = ({ person }) => {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = person;

  const gender = sex === 'f'
    ? 'husband'
    : 'wife';

  const agePerson = age && <p className="Person__age">{`I am ${age}`}</p>;

  const partner = isMarried
    ? `${partnerName} is my ${gender}`
    : 'I am not married';

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>
      {agePerson}
      <p className="Person__partner">
        {partner}
      </p>
    </section>
  );
};
