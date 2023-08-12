export const Person = (
  { person: { name, age, sex, isMarried, partnerName } },
) => {
  const partner = sex === 'm' ? 'wife' : 'husband';
  const personPartner = isMarried
    ? `${partnerName} is my ${partner}`
    : 'I am not married';

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age && <p className="Person__age">{`I am ${age}`}</p>}
      <p className="Person__partner">{personPartner}</p>
    </section>
  );
};
