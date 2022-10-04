import React from 'react';

export const Person = ({
  name,
  isMarried,
  age,
  sex,
  partnerName,
}) => (
  <section className="Person">
    <h2 className="Person__name">
      My name is
      {' '}
      {name}
    </h2>
    <p className="Person__age">{age && `I am ${age}`}</p>
    {sex === 'm'
      ? (<p className="Person__partner">{isMarried ? `${partnerName} is my wife` : 'I am not married'}</p>)
      : (<p className="Person__partner">{isMarried ? `${partnerName} is my husband` : 'I am not married'}</p>)}
  </section>
);

export default Person;
