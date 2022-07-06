import React from 'react';
import './Person.scss';

export function Person({
  name,
  age,
  sex,
  isMarried,
  partnerName,
}) {
  let partnerSex = 'husband`s';

  if (sex === 'm') {
    partnerSex = 'wife`s';
  }

  return (
    <>
      <section className="Person">
        <h2 className="Person__name">
          {`My name is ${name}`}
        </h2>
        {age && <p className="Person__age">{`I am ${age}`}</p>}
        <p className="Person__partner">
          {
            isMarried
              ? `My ${partnerSex} name is ${partnerName}`
              : 'I am not married'
          }
        </p>
      </section>
    </>
  );
}
