import React from 'react';

export const Person = ({ person }) => {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName
  } = person;

  const partner = (
    sex === 'm' 
      ? 'wife'
      : 'husband'
  )

  return (
    <>
      <h2>
        {`My name is ${name}`}
      </h2>
      {age && (
        <p>
          {`I am ${age}`}
        </p>
      )}

      <p>
        {isMarried
          ? (`${partnerName} is my ${partner}`)
          : (`I am not married`)
        }
      </p>
    </>
  );
};
