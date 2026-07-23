import React from 'react';

export const Person = ({
  person: { name, age, sex, isMarried, partnerName },
}) => {

  const partnerRole = sex === 'm' ? 'wife' : 'husband';

  const ageElement = age && (
    <p className="Person__age">I am {age}</p>
  );

  const marriageStatus = isMarried
    ? `${partnerName} is my ${partnerRole}`
    : 'I am not married';

  return (
    <div className="Person">
      
      <h2 className="Person__name">My name is {name}</h2>

      {ageElement}

      <p className="Person__partner">{marriageStatus}</p>
    </div>
  );
};
