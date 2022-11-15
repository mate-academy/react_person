import React from 'react';

export const Person = ({ person }) => {
  const {
    name,
    age,
    partnerName,
    isMarried,
    sex,
  } = person;
  const partnerStatus = sex === 'f'
    ? `is my husband`
    : `is my wife`;

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>

      {age && (
        <p className="Person__age">{`I am ${age}`}</p>
      )}

      {isMarried ? (
        <p className="Person__partner">{`${partnerName} ${partnerStatus}`}</p>
      ) : (
        <p className="Person__partner">I am not married</p>
      )}
    </section>
  );
};
