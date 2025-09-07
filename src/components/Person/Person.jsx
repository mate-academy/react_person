import React from 'react';

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partner } = person;

  const showAge = age != null;
  const isMarriedStatus = isMarried;

  const partnerLabel = sex === 'm' ? 'wife' : 'husband';

  const partnerText = isMarriedStatus
    ? `${partnerLabel}: ${partner}`
    : 'I am not married';

  return (
    <div className="Person">
      <h2 className="Person__name">{name}</h2>
      {showAge && <p className="Person__age">Age: {age}</p>}

      <p className="Person__partner">{partnerText}</p>
    </div>
  );
};
