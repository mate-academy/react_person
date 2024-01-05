export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;
  const CHECK_PARTNER = sex === 'm' ? 'is my wife' : 'is my husband';
  const MARRIED_MESSAGE = isMarried
    ? `${partnerName} ${CHECK_PARTNER}`
    : 'I am not married';

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age && <p className="Person__age">{`I am ${age}`}</p>}
      <p className="Person__partner">{MARRIED_MESSAGE}</p>
    </section>
  );
};
