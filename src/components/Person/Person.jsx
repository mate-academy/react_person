import React from 'react';
import './Person.scss';

const Person = (
  {
    person: {
      name,
      age = '"no info"',
      sex,
      isMarried,
      partnerName,
    },
  },
) => {
  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      <p className="Person__age">I am {age}</p>
      {isMarried
        ? (
          <p className="Person__partner">
            My {sex === 'm' ? 'wife' : 'husband'}&apos;s name is {partnerName}
          </p>
        )
        : <p className="Person__partner">I am not married</p>}
    </section>
  );
};

export default Person;
