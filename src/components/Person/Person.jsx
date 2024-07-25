import { Partner } from '../Partner/Partner';
import './Person.scss';

export const Person = ({ person }) => {
  const { name, age } = person;

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {age !== undefined && <p className="Person__age">I am {age}</p>}
      <Partner person={person} />
    </section>
  );
};
