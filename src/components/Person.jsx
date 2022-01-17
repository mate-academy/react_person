import React from 'react';
import './Person.scss';

function Person({
  name = '',
  age = null,
  sex = '',
  isMarried = null,
  partnerName = '',
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
      <p className="Person__partner">
        {isMarried
          ? `My partner is ${partnerName}`
          : 'I am not married'
        }
      </p>
    </section>
  );
}

export default Person;
