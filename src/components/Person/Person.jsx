import React from 'react';

export function Person({ person }) {
  const { name, age, sex, isMarried, partner } = person;

  const partnerType = sex === 'm' ? 'wife' : 'husband';

  return (
    <div className="Person">
      <h2 className="Person__name">{name}</h2>
      {age && <p className="Person__age">Age: {age}</p>}

      <p className="Person__partner">
        {isMarried && partner
          ? `Married to: ${partner.name} (${partnerType})`
          : 'I am not married'}
      </p>
    </div>
  );
}
