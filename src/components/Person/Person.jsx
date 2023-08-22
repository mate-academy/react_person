import React from 'react';

export const Person = ({ person }) => {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = person;

  const married = sex === 'f'
    ? 'husband'
    : 'wife';

  const partner = isMarried
    ? `${partnerName} is my ${married}`
    : 'I am not married';

  return (
    <section className="Person">
      <h1 className="Person__name">{`My name is ${name}`}</h1>
      {age && <p className="Person__age">{`I am ${age}`}</p>}
      <p className="Person__partner">{partner}</p>
    </section>
  );
};
