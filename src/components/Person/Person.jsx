function sex(person) {
  if (person.sex === 'm') {
    return `${person.partnerName} is my wife`;
  }

  return `${person.partnerName} is my husband`;
}

export const Person = ({ person }) => (
  <section className="Person">
    <h2 className="Person__name">My name is {person.name}</h2>
    {person.age && <p className="Person__age">I am {person.age}</p>}

    {person.isMarried ? (
      <p className="Person__partner">{sex(person)}</p>
    ) : (
      <p className="Person__partner">I am not married</p>
    )}
  </section>
);
