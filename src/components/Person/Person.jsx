// Write code here
import React from 'react';
import './person.scss';

export function Person({
  name,
  age,
  sex,
  isMarried,
  partnerName,
}) {
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

      {(
        isMarried && sex === 'f' && (
          <p className="Person__partner">
            {`My husband's name is ${partnerName}`}
          </p>
        )
      ) || (
        isMarried && sex === 'm' && (
          <p className="Person__partner">
            {`My wife's name is ${partnerName}`}
          </p>
        )
      ) || (
        <p className="Person__partner">I am not married</p>
      )}
    </section>
  );
}
