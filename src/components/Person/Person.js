import React from 'react';
import './Person.scss';

export const Person = ({
  name, age, sex, isMarried, partnerName,
}) => {
  const partnerSex = (sex === 'm') ? `wife's` : `husband's`;

  return (
    <section className="Person">
      <h2 className="Person__name">
        My name is {name}
      </h2>
      <p className="Person__age">{age && (`I am ${age}`)}</p>
      <p className="Person__partner">{isMarried ? `My ${partnerSex} name is ${partnerName}` : 'I am not married'}</p>
    </section>
  );
};
