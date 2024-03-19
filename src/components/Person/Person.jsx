/* eslint-disable no-nested-ternary */
import './Person.scss';
import React from 'react';

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  const getPartnerDescription = () => {
    if (!isMarried) {
      return 'I am not married';
    }

    const partnerType = sex === 'm' ? 'wife' : 'husband';

    return `${partnerName} is my ${partnerType}`;
  };

  return (
    <div className="Person">
      <p className="Person__name">My name is {name}</p>
      {age && <p className="Person__age">I am {age}</p>}
      <p className="Person__partner">{getPartnerDescription()}</p>
    </div>
  );
};
