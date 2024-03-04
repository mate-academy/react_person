/* eslint-disable no-nested-ternary */
import './Person.scss';

export const Person = ({ person }) => (
  <section className="person">
    <h2 className="person__name">My name is {person.name}</h2>
    {person.age && <p className="person__age">I am {person.age}</p>}
    <p className="person__partner">
      {person.isMarried
        ? person.sex === 'f'
          ? `${person.partnerName} is my husband`
          : `${person.partnerName} is my wife`
        : 'I am not married'}
    </p>
  </section>
);
