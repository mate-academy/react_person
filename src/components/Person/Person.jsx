/* eslint-disable react/jsx-one-expression-per-line */
export function Person({ person }) {
  let marriage = 'I am not married';

  if (person.isMarried) {
    if (person.sex === 'm') {
      marriage = `${person.partnerName} is my wife`;
    }

    if (person.sex === 'f') {
      marriage = `${person.partnerName} is my husband`;
    }
  }

  if ('age' in person) {
    return (
      <section className="Person">
        <h2 className="Person__name">My name is {person.name}</h2>
        <p className="Person__age">I am {person.age}</p>
        <p className="Person__partner">{marriage}</p>
      </section>
    );
  }

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>
      <p className="Person__partner">{marriage}</p>
    </section>
  );
}
