import './Person.scss';

export const Person = ({ person }) => (
  <section className="Person">
    <h2 className="Person__name">
      {`My name is ${person.name}`}
    </h2>
    {person.age && (
      <p className="Person__age">
        {`I am ${person.age}`}
      </p>
    )}
    <p className="Person__partner">{getPartner(person)}</p>
  </section>
);

function getPartner(person) {
  const partner = person.sex === 'f' ? 'husband' : 'wife';

  if (person.isMarried) {
    return (`${person.partnerName} is my ${partner}`);
  }

  return (`I am not married`);
}
