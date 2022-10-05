import React from 'react';

export const Person = ({ person }) => {
  const { name, age, isMarried, sex, partnerName } = person;

  return (

    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>
      <p className="Person__age">
        {age
          ? `I am ${age}`
          : null}
      </p>
      <p className="Person__partner">
        {isMarried
          ? `${partnerName} is my ${sex === 'f' ? 'husband' : 'wife'}`
          : `I am not married`}
      </p>
    </section>
  );
};
