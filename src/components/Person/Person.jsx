import React from 'react';

export const Person = ({ person }) => {
  const {
    name,
    age = null,
    sex,
    isMarried,
    partnerName,
  } = person;
  let notMarried = '';

  if (!isMarried) {
    notMarried = 'I am not married';
  }

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>

      {age && (
        <p className="Person__age">
          {`I am ${age}`}
        </p>
      )}

      <p className="Person__partner">
        {notMarried || (sex === 'f'
          ? `${partnerName} is my husband`
          : `${partnerName} is my wife`
        )}
      </p>
    </section>
  );
};
