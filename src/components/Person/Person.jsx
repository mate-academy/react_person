export const Person = ({ person }) => {
  const personGender = person.sex === 'm' ? 'wife' : 'husband';
  const personStatus = person.isMarried
    ? `${person.partnerName} is my ${personGender}`
    : 'I am not married';

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>
      {person.age && <p className="Person__age">I am {person.age}</p>}
      <p className="Person__partner">{personStatus}</p>
    </section>
  );
};
