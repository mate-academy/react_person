/* eslint-disable no-unused-expressions */
/* eslint-disable react/jsx-one-expression-per-line */
export function Person({ person }) {
  let marriage = 'I am not married';

  if (person.isMarried) {
    person.sex === 'm'
      ? marriage = `${person.partnerName} is my wife`
      : marriage = `${person.partnerName} is my husband`;
  }

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>
      {person.age != null
        ? <p className="Person__age">I am {person.age}</p>
        : null}
      <p className="Person__partner">{marriage}</p>
    </section>
  );
}
