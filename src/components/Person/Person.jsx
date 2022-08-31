import React from 'react';

export const Person = ({ person:
  { name, age, sex, isMarried, partnerName } }) => {
  const isMarriedMan = sex === 'm' && isMarried;
  const isMarriedWoman = sex === 'f' && isMarried;

  let text = '';

  if (isMarriedMan) {
    text = `${partnerName} is my wife`;
  }

  if (isMarriedWoman) {
    text = `${partnerName} is my husband`;
  }

  return (
    <>
      <section className="Person">
        <h2 className="Person__name">{`My name is ${name}`}</h2>
        {age && <p className="Person__age">{`I am ${age}`}</p>}
        <p className="Person__partner">{text || 'I am not married'}</p>
      </section>
    </>
  );
};
