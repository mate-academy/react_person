export const Person = ({ person }) => (
  <section className="Person">
    <h2 className="Person__name">My name is {person.name}</h2>
    {person.age && <p className="Person__age">I am {person.age}</p>}
    <p className="Person__partner">{isMarried(person)}</p>
  </section>
);

function isMarried(person) {
  return person.isMarried
    ? `${person.partnerName} is my ${sex(person)}`
    : 'I am not married';
}

function sex(person) {
  return person.sex === 'm' ? 'wife' : 'husband';
}
