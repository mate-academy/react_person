import React from 'react';

export const Person = ({ person }) => {
  const partnerLabel = person.sex === 'm' ? 'wife' : 'husband';

  return (
    <div className="Person">
      <div className="Person__name">My name is {person.name}</div>
      {person.age && <div className="Person__age">I am {person.age}</div>}
      <div className="Person__partner">
        {person.isMarried
          ? `${person.partnerName} is my ${partnerLabel}`
          : 'I am not married'}
      </div>
    </div>
  );
};
