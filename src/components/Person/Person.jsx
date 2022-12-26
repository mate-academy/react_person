import React from 'react';
import './Person.scss';

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;
  const reversedGender = (sex === 'm') ? 'wife' : 'husband';

  return (
    <div className="Person">
      <h3 className="Person__name">
        {`My name is ${name}`}
      </h3>
      {age && (
        <p className="Person__age">{`I am ${age}`}</p>
      )}
      <p className="Person__partner">
        {isMarried
          ? `${partnerName} is my ${reversedGender}`
          : 'I am not married'
        }
      </p>
    </div>
  );
};
