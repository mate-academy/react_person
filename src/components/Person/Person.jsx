import React from 'react';

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  const getPartnerLabel = () => {
    if (isMarried) {
      return sex === 'm'
        ? `${partnerName} is my wife`
        : `${partnerName} is my husband`;
    }

    return 'I am not married';
  };

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
        {getPartnerLabel()}
      </p>
    </section>
  );
};
