import React from 'react';

const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  let maritalStatus;

  if (isMarried) {
    maritalStatus = sex === 'm' ? `Wife: ${partnerName}` : `Husband: ${partnerName}`;
  } else {
    maritalStatus = 'I am not married';
  }

  return (
    <div className="Person">
      <div className="Person__name">{name}</div>
      {age && (
        <div className="Person__age">
          Age:
          {age}
        </div>
      )}
      <div className="Person__partner">
        {maritalStatus}
      </div>
    </div>
  );
};

export default Person;
