import React from 'react';

export const Person = ({ person }) => {
  const ageOfPerson = person.age;
  const partnerOfPerson = person.sex === 'm'
    ? 'wife'
    : 'husband';

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${person.name}`}</h2>

      {ageOfPerson ? (
        <p className="Person__age">{`I am ${person.age}!`}</p>
      ) : (<p>{null}</p>)}

      <p className="Person__partner">
        {person.isMarried
          ? `My ${partnerOfPerson}'s name is ${person.partnerName}`
          : 'I am not married'
            }
      </p>

    </section>
  );
};
