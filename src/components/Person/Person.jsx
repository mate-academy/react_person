export const Person = ({ person }) => {
  const role = person.sex === 'm'
    ? 'wife'
    : 'husband';
  const partnerMessage = person.isMarried
    ? `${person.partnerName} is my ${role}`
    : 'I am not married';

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${person.name}`}</h2>
      {person.age && <p className="Person__age">{`I am ${person.age}`}</p>}

      <p className="Person__partner">{partnerMessage}</p>
    </section>
  );
};
