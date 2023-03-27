import React from 'react';

export const Person = (props) => {
  const person1 = props.person;
  const { name, age, sex, isMarried, partnerName } = person1;

  const partner = sex === 'f' ? 'husband' : 'wife';

  return (
    <>
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age && (
        <p className="Person__age">
          {`I am ${age}`}
        </p>
      )}
      <p className="Person__partner">
        {isMarried
          ? `${partnerName} is my ${partner}`
          : `I am not married`
        }
      </p>
    </>
  );
};
