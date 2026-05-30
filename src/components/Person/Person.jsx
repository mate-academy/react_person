import React from 'react';

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  const partnerLabel = sex === 'm' ? 'wife' : 'husband';

  return (
    <div className="Person">
      <p className="Person__name">My name is {name}</p>

      {age !== undefined && <p className="Person__age">I am {age}</p>}

      <p className="Person__partner">
        {isMarried
          ? `${partnerName} is my ${partnerLabel}`
          : 'I am not married'}
      </p>
    </div>
  );
};
