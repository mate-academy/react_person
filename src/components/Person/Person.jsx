import React from 'react';

export const Person = ({ person }) => {
  const { name, age, isMarried, sex, partnerName } = person;

  const partnerInfo = isMarried
  ? `My ${sex === 'm' ? 'wife' : 'husband'} is ${partnerName}`
  : 'I am not married';


  return (
    <div className="Person">
      <p className="Person__name">My name is {name}</p>
      {age && <p className="Person__age">I am {age}</p>}
      <p className="Person__partner">{partnerInfo}</p>
    </div>
  );
};
