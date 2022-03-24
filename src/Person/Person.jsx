import React from 'react';
import './Person.scss';

function Person({
  name,
  age,
  sex,
  isMarried,
  partnerName: pName,
}) {
  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age && <p className="Person__age">{age && `I am ${age}`}</p>}
      {isMarried
        ? (
          <p className="Person__partner">
            {`My ${sex === 'm' ? 'wife' : 'husband'} is name is ${pName}`}
          </p>
        )
        : (
          <p className="Person__partner">I am not married</p>
        )}
    </section>
  );
}

export { Person };
