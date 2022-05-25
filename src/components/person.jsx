import React from 'react';
import './person.scss';

export const Person = ({ person }) => {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = person;
  let status = '';

  if (sex === 'f') {
    status = 'husband';
  } else

  if (isMarried && sex === 'm') {
    status = 'wife';
  }

  return (
    <section className="Person">

      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>

      {
        age
          ? (<p className="Person__age">{`I am ${age}`}</p>)
          : null
      }
      <p className="Person__partner">
        {
          isMarried
            ? `My ${status}'s name is ${partnerName}`
            : 'I am not married'
        }
      </p>
    </section>
  );
};
