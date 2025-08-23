export const Person = ({ person }) => {
  const partnerSex = person.sex === 'm' ? 'wife' : 'husband';

  const partnerInfo = person.isMarried
    ? `${person.partnerName} is my ${partnerSex}`
    : 'I am not married';

  const ageContent =
    person.age != null ? (
      <p className="Person__age">I am {person.age}</p>
    ) : null;

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>
      {ageContent}
      <p className="Person__partner">{partnerInfo}</p>
    </section>
  );
};
