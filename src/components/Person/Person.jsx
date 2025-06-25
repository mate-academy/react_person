export const Person = ({ person }) => {
  let marriageStatus = 'I am not married';

  if (person.isMarried === true) {
    marriageStatus =
      person.sex === 'f'
        ? `${person.partnerName} is my husband`
        : `${person.partnerName} is my wife`;
  }

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>
      {person.age > 0 && <p className="Person__age">I am {person.age}</p>}
      <p className="Person__partner">{marriageStatus}</p>
    </section>
  );
};
