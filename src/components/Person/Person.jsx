export const Person = ({ person }) => {
  const ageContent = person.age ? (
    <p className="Person__age">I am {person.age}</p>
  ) : null;

  const relationship = person.sex === 'm' ? 'wife' : 'husband';

  const personalPartner = person.isMarried ? (
    <p className="Person__partner">
      {person.partnerName} is my {relationship}
    </p>
  ) : (
    <p className="Person__partner">I am not married</p>
  );

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>
      {ageContent}
      {personalPartner}
    </section>
  );
};
