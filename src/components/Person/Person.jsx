// export const Person = ({ person }) => ();
import React from 'react';

export const Person = ({ person }) => {
  const { name, sex, age, isMarried, partnerName } = person;
  const Sex = sex === 'm' ? 'wife' : 'husband';
  const married = isMarried
    ? `${partnerName} is my ${Sex}`
    : 'I am not married';

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age && <p className="Person__age">{`I am ${age}`}</p>}
      <p className="Person__partner">{married}</p>
    </section>
  );
};
