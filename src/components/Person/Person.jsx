import React from 'react';

export const Person = ({ person }) => {
  const { name, age, sex, isMarried = false, partnerName } = person;
  const partnerSex = sex === 'm' ? 'wife' : 'husband';
  const partnerInfo = isMarried ? `${partnerName} is my ${partnerSex}` : 'I am not married';
  const agePart = age
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
      {agePart}
      <p className="Person__partner">{partnerInfo}</p>
    </section>
  );
};
