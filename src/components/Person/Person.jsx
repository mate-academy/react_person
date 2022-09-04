import React from 'react';

export const Person = ({ person }) => {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = person;
  let partnerRole = '';

  switch (sex) {
    case 'm':
      partnerRole = 'wife';
      break;
    case 'f':
      partnerRole = 'husband';
      break;
    default: throw new Error('Wrong sex value');
  }

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>

      { age && (
        <p className="Person__age">
          {`I am ${age}`}
        </p>
      )}

      { isMarried ? (
        <p className="Person__partner">
          {`${partnerName} is my ${partnerRole}`}
        </p>
      ) : (
        <p className="Person__partner">I am not married</p>
      )}
    </section>
  );
};
