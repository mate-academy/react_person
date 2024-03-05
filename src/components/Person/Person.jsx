export const Person = ({ person }) => {
  let partnerMessage = 'I am not married';

  if (person.isMarried) {
    const relationship = person.sex === 'm' ? 'wife' : 'husband';

    partnerMessage = `${person.partnerName} is my ${relationship}`;
  }

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>
      {person.age && <p className="Person__age">I am {person.age}</p>}
      <p className="Person__partner">{partnerMessage}</p>
    </section>
  );
};
