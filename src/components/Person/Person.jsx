export const Person = ({ person }) => (
  <section className="Person">
    <h2 className="Person__name">My name is {person.name}</h2>
    <Age age={person.age} />
    <Married p={person} />
  </section>
);

function Age({ age }) {
  if (age) {
    return <p className="Person__age">I am {age}</p>;
  }

  return null;
}

function Married({ p }) {
  if (p.isMarried) {
    if (p.sex === 'm') {
      return <p className="Person__partner">{p.partnerName} is my wife</p>;
    }

    return <p className="Person__partner">{p.partnerName} is my husband</p>;
  }

  return <p className="Person__partner">I am not married</p>;
}
