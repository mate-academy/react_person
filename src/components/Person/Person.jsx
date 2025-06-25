export const Person = ({ person }) => {
  let partner = 'I am not married';
  const husband = `${person.partnerName} is my husband`;
  const wife = `${person.partnerName} is my wife`;

  if (person.isMarried) {
    partner = person.sex === 'f' ? husband : wife;
  }

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>
      {person.age && <p className="Person__age">I am {person.age}</p>}
      <p className="Person__partner">{partner}</p>
    </section>
  );
};
