import React from 'react';
import './Person.scss';

function Person({ person }) {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = person;

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age && (
        <p className="Person__age">I am 37</p>
      )}
      {isMarried
        ? (
          <p className="Person__partner">
            {`My ${sex === 'm'
              ? 'wife\'s'
              : 'husband\'s'
            } name is ${partnerName}`}
          </p>
        )
        : (
          <p className="Person__partner">I am not married</p>
        )
      }

    </section>
  );
}

export default Person;
