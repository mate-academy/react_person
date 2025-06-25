import React from 'react';
import './Person.scss';

export const Person = ({ person }) => {
  const isMarried = (personStatus) => {
    if (!personStatus.isMarried) {
      return 'I am not married';
    }

    return personStatus.sex === 'm'
      ? `${personStatus.partnerName} is my wife`
      : `${personStatus.partnerName} is my husband`;
  };

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${person.name}`}
      </h2>

      {person.age && <p className="Person__age">{`I am ${person.age}`}</p>
      }

      <p className="Person__partner">
        {isMarried(person)}
      </p>
    </section>
  );
};
