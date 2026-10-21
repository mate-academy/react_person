export const Person = ({ person }) => {
  const partnerType = person.sex === 'm' ? 'wife' : 'husband';
  const marriedText = `${person.partnerName} is my ${partnerType}`;

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>
      {person.age && <p className="Person__age">I am {person.age}</p>}
      {person.isMarried ? (
        <p className="Person__partner">{marriedText}</p>
      ) : (
        <p className="Person__partner">I am not married</p>
      )}
    </section>
  );
};
