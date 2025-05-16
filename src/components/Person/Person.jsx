export const Person = ({ person }) => {
  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${person.name}`}</h2>
      {person.age && <p className="Person__age">{`I am ${person.age}`}</p>}
      <p className="Person__partner">{getMarriedString(person)}</p>
    </section>
  );
};

function getMarriedString(person) {
  if (person.isMarried) {
    if (person.sex === 'm') {
      return `${person.partnerName} is my wife`;
    }

    return `${person.partnerName} is my husband`;
  }

  return 'I am not married';
}
