import React from 'react';

export const Person = ({ person }) => {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = person;
  const gender = sex === 'm'
    ? <p className="Person__partner">{`${partnerName} is my wife`}</p>
    : <p className="Person__partner">{`${partnerName} is my husband`}</p>;

  return (
    <div className="App">
      <section className="Person">
        <h2 className="Person__name">{`My name is ${name}`}</h2>
        {age && (
          <p className="Person__age">{`I am ${age}`}</p>
        )}

        {
        isMarried === true
          ? gender
          : <p className="Person__partner">I am not married</p>
        }
      </section>
    </div>
  );
};
