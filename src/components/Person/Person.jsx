export const Person = ({ person }) => {
  const personStatus = person.sex === 'm' ? `wife` : `husband`;
  const personPartnerInfo = person.isMarried
    ? `${person.partnerName} is my ${personStatus}`
    : `I am not married`;

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>
      {'age' in person ? (
        <p className="Person__age">I am {person.age}</p>
      ) : null}
      <p className="Person__partner">{personPartnerInfo}</p>
    </section>
  );
};
