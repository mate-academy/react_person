import React from 'react';

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;
  let myPartner = '';

  if (sex === 'm' && isMarried === true) {
    myPartner = `${partnerName} is my wife`;
  } else if (sex === 'f' && isMarried === true) {
    myPartner = `${partnerName} is my husband`;
  } else {
    myPartner = 'I am not married';
  }

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age && (
      <p className="Person__age">{`I am ${age}`}</p>
      )}
      <p className="Person__partner">{`${myPartner}`}</p>
    </section>
  );
};
