export const Person = ({ person }) => {
  const { sex, isMarried, partnerName } = person;
  const personPartner = sex === 'm' ? 'wife' : 'husband';
  const personStatus = isMarried
    ? `${partnerName} is my ${personPartner}`
    : 'I am not married';

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>
      {person.age && <p className="Person__age">I am {person.age}</p>}
      <p className="Person__partner">{personStatus}</p>
    </section>
  );
};
