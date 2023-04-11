import React from 'react';

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  return (
    <>
      <h2>{`My name is ${name}`}</h2>
      {age && (<p>{`I am ${age}`}</p>)}
      <p>
        {isMarried
          ? (`${partnerName} is my ${sex === 'm' ? 'wife' : 'husband'}`)
          : (`I am not married`)
        }
      </p>
    </>
  );
};
