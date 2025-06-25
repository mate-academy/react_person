export const Person = ({ person }) => {
  let marriedLabel = 'I am not married';

  if (person.isMarried) {
    marriedLabel = `${person.partnerName} is my ${person.sex === 'm' ? 'wife' : 'husband'}`;
  }

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>
      {person.age && <p className="Person__age">I am {person.age}</p>}
      <p className="Person__partner">{marriedLabel}</p>
    </section>
  );
};
