/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './Person.scss';

function Person({
  name, age, partnerName, isMarried, sex,
}) {
  let partner = '';

  if (sex === 'm') {
    partner = 'wife';
  } else {
    partner = 'husband';
  }

  return (
    <section className="Person">
      <h2 className="Person__name">{`My neme is ${name}`}</h2>
      <p className="Person__age">{age ? `I am ${age}` : null}</p>
      <p className="Person__partner">{isMarried ? `My ${partner}'s name is ${partnerName}` : 'I am not married'}</p>
    </section>
  );
}

export default Person;
