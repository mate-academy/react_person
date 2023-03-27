import React from 'react';

const checkSex = sex => (
  (sex === 'f')
    ? 'husband'
    : 'wife'
);

export const Person = ({ person }) => {
  const {
    name,
    age,
    sex,
    partnerName,
    isMarried,
  } = person;

  return (
    <>
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>

      {age && (
      <p className="Person__age">
        {`I am ${age}`}
      </p>
      )}

      {
        <p className="Person__partner">
          {isMarried ? (
            `${partnerName} is my ${checkSex(sex)}`
          ) : 'I am not married'
      }
        </p>
    }
    </>
  );
};
