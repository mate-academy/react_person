export const Person = ({ person }) => {
  const getPartnerDescription = () => {
    if (!person.isMarried) {
      return 'I am not married';
    }

    const partnerRelation = person.sex === 'm' ? 'wife' : 'husband';

    return `${person.partnerName} is my ${partnerRelation}`;
  };

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>
      {person.age && <p className="Person__age">I am {person.age}</p>}
      <p className="Person__partner">{getPartnerDescription()}</p>
    </section>
  );
};
