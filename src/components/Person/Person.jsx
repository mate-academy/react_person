import React from 'react';
import './Person.scss';

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  return (
    <div className="Person">
      <div className="Person__name">Name : {name}</div>
      {age !== undefined && <div className="Person__age">Age: {age}</div>}
      {isMarried ? (
        <div className="Person__partner">
          {partnerName} is my {sex === 'm'
            ? 'wife'
            : 'husband'
        }
        </div>
      ) : (
        <div className="Person__partner">I am not married</div>
      )}
    </div>
  );
};
