/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './Person.scss';

export function Person({
  name,
  age,
  sex,
  isMarried,
  partnerName,
}) {
  const partner = (sex === 'm')
    ? 'wife\'s'
    : 'husband\'s';

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>

      {age && (
        <p className="Person__age">{`I am ${age}`}</p>
      )}

      <p className="Person__partner">
        {
          isMarried
            ? `My ${partner} name is ${partnerName}`
            : 'I am not married'
        }
      </p>
    </section>
  );
}
