import React from 'react';

export const PersonSpouse = ({ sex, isMarried, spouse }) => {
  const spouseType = sex === 'f' 
    ? 'husband' 
    : 'wife';
  const text = isMarried 
    ? `${spouse} is my ${spouseType}` 
    : 'I am not married';

  return <p className="Person__partner">{text}</p>;
};
