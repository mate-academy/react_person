export const Person = ({ person }) => {
  const { isMarried, sex, partnerName, name, age } = person;

  const personPartnerType = sex === 'm' ? 'wife' : 'husband';
  const married = isMarried ? `${partnerName} is my ${personPartnerType}` : 'I am not married';

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {age && <p className="Person__age">I am {age}</p>}
      <p className="Person__partner">{married}</p>
    </section>
  );
};
