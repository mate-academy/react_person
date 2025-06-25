export const Person = ({ person }) => {
  let status = '';

  if (person.isMarried === true) {
    if (person.sex === 'm') {
      status = `${person.partnerName} is my wife`;
    } else {
      status = `${person.partnerName} is my husband`;
    }
  } else if (person.isMarried === false) {
    status = 'I am not married';
  }

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${person.name}`}</h2>
      {person.age > 0 && <p className="Person__age">{`I am ${person.age}`}</p>}
      <p className="Person__partner">{status}</p>
    </section>
  );
};
