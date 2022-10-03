import React from 'react';

export const Person = (props) => {
  const { name, age, isMarried, sex, partnerName } = props.person;

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>
      {age
      && (
      <p className="Person__age">
        {`I am ${age}`}
      </p>
      )}

      {isMarried && sex === 'm'
        ? (
          <p className="Person__partner">
            {`${partnerName} is my wife`}
          </p>
        )
        : (
          <p className="Person__partner">
            {`${partnerName} is my husband`}
          </p>
        )
      }

      {!isMarried
      && (
      <p className="Person__partner">
        I am not married
      </p>
      )}

    </section>
  );
};
