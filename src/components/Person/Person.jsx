// eslint-disable-next-line no-unused-vars
import React from 'react';

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  const getPartner = (married) => {
    if (married) {
      return (
        sex === 'm'
          ? `${partnerName} is my wife`
          : `${partnerName} is my husband`
      );
    }

    return 'I am not married';
  };

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>
      {age
        && (<p className="Person__age">{`${age}`}</p>)
      }
      <p className="Person__partner">
        {getPartner(isMarried)}
      </p>
    </section>
  );
};
