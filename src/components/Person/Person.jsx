import React from 'react';
import './person.scss';

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
    <section className="person">
      <h2 className="person__name">
        {`My name is ${person.name}`}
      </h2>

      {person.age
        ? <p className="person__age">{`I am ${person.age}`}</p>
        : null
      }

      <p className="person__partner">
        {isMarried(person)}
      </p>
    </section>
  );
};
