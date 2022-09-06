import React from 'react';

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;
  const partnerSex = sex === 'f'
    ? 'husband'
    : 'wife';

  const isMarriedPersone = isMarried
    ? `${partnerName} is my ${partnerSex}`
    : `I am not married`;

  const haveAge = age
    ? <p className="Person__age">{`I am ${age}`}</p>
    : '';

  return (
    <div className="App">
      <section className="Person">
        <h2 className="Person__name">{`My name is ${name}`}</h2>
        {haveAge}
        <p className="Person__partner">{isMarriedPersone}</p>
      </section>
    </div>
  );
};
