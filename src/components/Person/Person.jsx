import React from 'react';
import './Person.scss';

export const Person = ({
  name,
  age,
  sex,
  isMarried,
  partnerName,
}) => {
  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      <p className="Person__age">{age ? `I am ${age}` : null}</p>

      {isMarried ? (
        <p className="Person__partner">
          {`My ${sex === 'm' ? 'wife\'s' : 'husband\'s'} name is ${partnerName}`}
        </p>
      ) : <p className="Person__partner">I am not married</p>}
    </section>
  );
};
