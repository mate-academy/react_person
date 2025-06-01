const getPartnerResponse = ({ isMarried, sex, partnerName }) => {
  if (!isMarried) return 'I am not married';
  const spouseTerm = sex === 'm' ? 'wife' : 'husband';
  return `${partnerName} is my ${spouseTerm}`;
};

export const Person = ({ person }) => {
  const partnerResponse = getPartnerResponse(person);
  return (
    <section className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>
      {person.age != null && <p className="Person__age">I am {person.age}</p>}
      <p className="Person__partner">{partnerResponse}</p>
    </section>
  );
};
