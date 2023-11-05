import React from 'react';

// eslint-disable-next-line func-names
export const Person = function({ person }) {
  const { name, age, sex, isMarried, partnerName } = person;

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>

      {age && (<p className="Person__age">{`I am ${age}`}</p>)}

      {!isMarried && (
        <p className="Person__partner">I am not married</p>
      )}

      {person.isMarried && (
        <p className="Person__partner">
          {sex === 'm'
            ? `${partnerName} is my wife`
            : `${partnerName} is my husband`
          }
        </p>
      )}
    </section>
  );
};
