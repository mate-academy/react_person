import React from 'react';
import './Person.scss';

const Person = ({
  name, age, sex, isMarried, partnerName,
}) => {
  let sexMaleOrFemale = '';

  if (sex === 'm') {
    sexMaleOrFemale = 'wife';
  } else if (sex === 'f') {
    sexMaleOrFemale = 'husband';
  }

  const married = isMarried
    ? `My ${sexMaleOrFemale}'s name is ${partnerName}`
    : 'I am not married';

  return (
    <section className="Person">
      <h2 className="Person__name">
        My name is
        {name}
      </h2>
      {age && (
        <p className="Person__age">
          I am
          {age}
        </p>
      )}
      <p className="Person__partner">{married}</p>
    </section>
  );
};

export default Person;
