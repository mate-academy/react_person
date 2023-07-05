import React from 'react';

export const Person = ({ person }) => {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = person;

  const married = `${partnerName} is my ${sex === 'f' ? 'husband'
    : 'wife'}`;
  const notMarried = 'I am not married';
  const checkMarried = isMarried
    ? married
    : notMarried;

  return (

    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>

      {age && (
      <p className="Person__age">
        {`I am ${age}`}
      </p>
      )}

      <p className="Person__partner">
        {checkMarried}
      </p>

    </section>
  );
};
