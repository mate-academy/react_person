import React from 'react';

export const Person = ({ person }) => {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = person;

  const partnerStatus = (sex === 'f')
    ? 'husband'
    : 'wife';

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

      {isMarried
        ? (
          <p className="Person__partner">
            {`${partnerName} is my ${partnerStatus}`}
          </p>
        ) : (
          'I am not married'
        )}

    </section>
  );
};
