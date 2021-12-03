import React from 'react';
import './Person.scss';

export const Person = ({
  name,
  age,
  sex,
  isMarried,
  partnerName,
}) => {
  const wifeOrHusband = sex === 'f' ? 'husband' : 'wife';

  return (
    <section className="person">
      <h2 className="person__name hover-hide">
        My name is
        {' '}
        {name}
      </h2>
      <p className="person__age hover-hide">
        {age && (
          `I am ${age}`
        )}
      </p>
      <p className="person__partner hover-hide">
        {isMarried
          ? `My ${wifeOrHusband}'s name is ${partnerName}`
          : 'I am not married'
        }
      </p>
      <h1 className="person__name-prewiew">
        {name}
      </h1>
    </section>
  );
};
