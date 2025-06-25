import React from 'react';

export const Person = ({ person }) => {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = person;

  const nameChecking = age
    ? <p className="Person__age">{`I am ${age}`}</p>
    : null;

  const marrigeCheck = sex === 'm'
    ? <p className="Person__partner">{`${partnerName} is my wife`}</p>
    : <p className="Person__partner">{`${partnerName} is my husband`}</p>;

  return (
    <>
      <section className="Person">
        <h2 className="Person__name">{`My name is ${name}`}</h2>
        {nameChecking}
        {isMarried
          ? marrigeCheck
          : <p className="Person__partner">I am not married</p>
        }

      </section>
    </>
  );
};
