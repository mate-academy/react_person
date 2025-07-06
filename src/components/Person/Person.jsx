import React from 'react';

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  const getPartnerText = () => {
    if (!isMarried) {
      return 'I am not married';
    }
    const role = sex === 'm' ? 'wife' : 'husband';
    return `My ${role} is ${partnerName}`;
  };

  return (
    <div className="Person">
      <h2 className="Person__name">{name}</h2>
      {age !== undefined && <p className="Person__age">{age}</p>}
      <p className="Person__partner">{getPartnerText()}</p>
    </div>
  );
};

