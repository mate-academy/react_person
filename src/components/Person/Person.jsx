export const Person = ({ person }) => {
  let messageMarried = 'I am not married';

  if (person.isMarried) {
    const spouse = person.sex === 'm' ? 'wife' : 'husband';

    messageMarried = `${person.partnerName} is my ${spouse}`;
  }

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>
      {person.age !== undefined && (
        <p className="Person__age">I am {person.age}</p>
      )}
      <p className="Person__partner">{messageMarried}</p>
    </section>
  );
};
