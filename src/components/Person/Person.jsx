import './Person.scss';

export const Person = ({ person }) => {
  const age = person.age && `I am ${person.age}`;
  const partner = person.sex === 'm' ? 'wife' : 'husband';
  const personMarried = person.isMarried === true ? `${person.partnerName} is my ${partner}` : 'I am not married';

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${person.name}`}</h2>
      {age && <p className="Person__age">{age}</p>}
      <p className="Person__partner">{personMarried}</p>
    </section>
  );
};

export default Person;
