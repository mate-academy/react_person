import React from 'react';
import './Person.scss';

export const Person = ({ name, age, sex, isMarried, partnerName }) => {
  const partner = sex === 'm' ? 'wife' : 'husband';
  const genderAvatar = sex === 'm' ? 'gender-man' : 'gender-woman';

  return (
    <section className="Person">
      <div className="Person__avatar">
        <img
          src={`images/${genderAvatar}.png`}
          alt="Person Gender"
          className="Person__avatar-img"
        />
      </div>

      <div className="Person__info">
        <h2 className="Person__name">{`My name is ${name}`}</h2>
        <p className="Person__age">{age && `I am ${age}`}</p>
        <p className="Person__partner">
          {isMarried && `My ${partner}'s name is ${partnerName}`}
        </p>
      </div>
    </section>
  );
};
