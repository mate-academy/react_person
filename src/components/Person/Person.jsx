// export const Person = ({ person }) => ();
import React from 'react';

export function Person(props) {
  const {
    name,
    sex,
    age,
    isMarried,
    partnerName,
  } = props.person;

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
      {isMarried && (
        <p className="Person__partner">
          {sex === 'm'
            ? `${partnerName} is my wife`
            : `${partnerName} is my husband`
        }
        </p>
      )}
      {!isMarried && (
        <p className="Person__partner">
          I am not married
        </p>
      )}
    </section>
  );
}
