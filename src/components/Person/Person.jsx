const getPartnerMessage = ({ isMarried, sex, partnerName }) => {
  if (!isMarried) {
    return 'I am not married';
  }

  const partner = sex === 'm' ? 'wife' : 'husband';

  return `${partnerName} is my ${partner}`;
};

export const Person = ({ person }) => (
  <section className="Person">
    <h2 className="Person__name">{`My name is ${person.name}`}</h2>
    {person.age && <p className="Person__age">{`I am ${person.age}`}</p>}
    <p className="Person__partner">{getPartnerMessage(person)}</p>
  </section>
);
