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

  const maritalStatus = isMarried
    ? `${partnerName} ${partnerStatus}`
    : `I am not married`;

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>

      {age && (
        <p className="Person__age">{`I am ${age}`}</p>
      )}

      <p className="Person__partner">
        {maritalStatus}
      </p>
    </section>
  );
};
