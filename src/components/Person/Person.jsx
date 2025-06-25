const getInfo = person => {
  if (person.isMarried === false) {
    return `I am not married`;
  }

  if (person.sex === 'f') {
    return `${person.partnerName} is my husband`;
  }

  return `${person.partnerName} is my wife`;
};

export const Person = ({ person }) => (
  <section className="Person">
    <h2 className="Person__name">{`My name is ${person.name}`}</h2>
    {person.age && <p className="Person__age">{`I am ${person.age}`}</p>}
    <p className="Person__partner">{getInfo(person)}</p>
  </section>
);
