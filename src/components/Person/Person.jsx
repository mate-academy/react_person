export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;
  const ageCheck = age !== undefined && (
    <p className="Person__age">{`I am ${age}`}</p>
  );
  const partnerSex = sex === 'm' ? 'wife' : 'husband';
  const status = isMarried
    ? `${partnerName} is my ${partnerSex}`
    : 'I am not married';

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {ageCheck}
      <p className="Person__partner">{status}</p>
    </section>
  );
};
