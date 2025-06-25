/* eslint-disable no-nested-ternary */
export const Person = ({ person }) => (
  <section className="Person">
    <h2 className="Person__name">My name is {person.name}</h2>
    {person.age !== undefined && (
      <p className="Person__age">I am {person.age}</p>
    )}
    <p className="Person__sex">{person.sex}</p>
    <p className="Person__isMarried">
      {person.isMarried
        ? person.sex === 'm'
          ? `${person.partnerName} is my wife`
          : `${person.partnerName} is my husband`
        : 'I am not married'}
    </p>
    <p className="Person__partner">
      {person.isMarried && person.partnerName
        ? person.sex === 'm'
          ? `${person.partnerName} is my wife`
          : `${person.partnerName} is my husband`
        : 'not married'}
    </p>
  </section>
);
