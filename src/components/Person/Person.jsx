export const Person = ({ person }) => (
  <section className="Person">
    <h2 className="Person__name">{`My name is ${person.name}`}</h2>
    {person.age && <p className="Person__age">{`I am ${person.age}`}</p>}
    <p className="Person__partner">{resolvePartner(person)}</p>
  </section>
);

function resolvePartner(person) {
  if (!person.isMarried) {
    return 'I am not married';
  }

  return person.sex === 'm'
    ? `${person.partnerName} is my wife`
    : `${person.partnerName} is my husband`;
}
