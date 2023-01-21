import React from 'react';

export const Person = (obj) => {
  const objKeys = { ...obj };
  const people = objKeys.person;

  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = people;

  const partner = sex === 'm'
    ? 'wife'
    : 'husband';

  const withPartner = `${partnerName} is my ${partner}`;
  const checkForPartner = isMarried === false
    ? 'I am not married'
    : withPartner;

  const withAge = age
    ? <p className="Person__age">{`I am ${age}`}</p>
    : '';

  return (
    <div className="App">
      <section className="Person">
        <h2 className="Person__name">{`My name is ${name}`}</h2>
        {withAge}
        <p className="Person__partner">{checkForPartner}</p>
      </section>
    </div>
  );
};
