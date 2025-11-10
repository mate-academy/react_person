export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;
  const partner = sex === 'm' ? 'wife' : 'husband';

  const isMarriedText = isMarried
    ? `${partnerName} is my ${partner}`
    : 'I am not married';

  const printAge = age !== undefined && (
    <p className="Person__age">I am {age}</p>
  );

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {printAge}
      <p className="Person__partner">{isMarriedText}</p>
    </section>
  );
};
