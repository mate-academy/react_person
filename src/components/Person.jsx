import React from 'react';
import '../App.scss';

function Person({ person }) {
  const { name, age, sex, isMarried, partnerName } = person;

  const partnerInfo = !isMarried
    ? 'I am not married'
    : `${partnerName} is my ${sex === 'm' ? 'wife' : 'husband'}`;

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {age && <p className="Person__age">I am {age}</p>}
      <p className="Person__partner">{partnerInfo}</p>
    </section>
  );
}

export default Person;
