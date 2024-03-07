export const Person = ({ person }) => {
  const partnerRelationship =
    person.sex === 'm'
      ? `${person.partnerName} is my wife`
      : `${person.partnerName} is my husband`;
  const partnerDescription = person.isMarried
    ? partnerRelationship
    : 'I am not married';

  <section className="Person">
    <h2 className="Person__name">My name is {person.name}</h2>
    {person.age && <p className="Person__age">I am {person.age}</p>}
    <p className="Person__partner">{partnerDescription}</p>
  </section>;
};
