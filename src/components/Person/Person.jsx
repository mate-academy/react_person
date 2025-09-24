
import React from 'react';
import './Person.scss';

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partner } = person;

  let partnerLabel = '';
  if (isMarried) {
    partnerLabel = sex === 'm'
     ? 'wife' 
     : 'husband';
  }

  return (
    <div className='Person'>
      <div className='Person__name'>{name}</div>
      {age !== undefined && (
        <div className='Person__age'> {`Age: ${age}`}</div>
      )}
      <div className='Person__partner'>
        {isMarried 
        ? `My ${partnerLabel} is ${partner}`
        : `I am not married`}
      </div>
    </div>
  );
};
