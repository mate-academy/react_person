import React from 'react';

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  const partnerGender = sex === 'f' ? 'husband' : 'wife';

  return (
    <article className="Person">
      <h3 className="Person__name">My name is {name}</h3>
      {age && <p className="Person__age">I am {age}</p>}

      {isMarried ? (
        <p className="Person__partner">
          {partnerName} is my {partnerGender}
        </p>
      ) : (
        <p className="Person__partner">I am not married</p>
      )}
    </article>
  );
};
