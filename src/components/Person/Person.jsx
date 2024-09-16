import React from 'react';
import './Person.scss';

const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;
  const partner = sex === 'f' ? 'husband' : 'wife';
  const text = isMarried
    ? `${partnerName} is my ${partner}`
    : 'I am not married';

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age && <p className="Person__age">{`I am ${age}`}</p>}
      <p className="Person__partner">{text}</p>
    </section>
  );
};

export { Person };
