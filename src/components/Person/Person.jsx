import React from 'react';
import './Person.scss';

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  const ageBlock =
    typeof age !== 'undefined' ? (
      <p className="Person__age">I am {age}</p>
    ) : null;

  const getPartnerInfo = () => {
    if (!isMarried) {
      return 'I am not married';
    }

    const partnerSex = sex === 'male' ? 'wife' : 'husband';

    return `${partnerName} is my ${partnerSex}`;
  };

  const partnerText = getPartnerInfo();

  return (
    <div className="Person">
      <h2 className="Person__name">{name}</h2>

      {ageBlock}

      <p className="Person__partner">{partnerText}</p>
    </div>
  );
};
