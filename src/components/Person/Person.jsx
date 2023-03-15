import React from 'react';

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  function getPartnerFieldText() {
    if (isMarried && partnerName) {
      return sex === 'm'
        ? `${partnerName} is my wife`
        : `${partnerName} is my husband`;
    }

    return `I am not married`;
  }

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>
      <p className="Person__age">
        {age && `I am ${age}`}
      </p>
      <p className="Person__partner">
        {getPartnerFieldText()}
      </p>
    </section>
  );
};
