import React from 'react';

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;
  const partnerLabel = sex === 'm' ? 'wife' : 'husband';

  return (
    <div className="Person">
      <div className="Person__name">My name is {name}</div>
      {age && <div className="Person__age">I am {age}</div>}
      <div className="Person__partner">
        {isMarried
          ? `${partnerName} is my ${partnerLabel}`
          : 'I am not married'}
      </div>
    </div>
  );
};
