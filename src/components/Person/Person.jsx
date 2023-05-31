import React from 'react';

export const Person = (props) => {
  const {
    name,
    age,
    sex,
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
      <p className="Person__partner">
        {!isMarried && ('I am not married')}
        {(isMarried && sex === 'f') && (`${partnerName} is my husband`)}
        {(isMarried && sex === 'm') && (`${partnerName} is my wife`)}
      </p>
    </section>
  );
};
