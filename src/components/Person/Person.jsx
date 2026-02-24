export const Person = ({ person }) => {
  const { name, age, isMarried, sex, partnerName } = person;
  const partnerLabel = sex === 'm' ? 'wife' : 'husband';
  const partnerNode = isMarried
    ? `${partnerName} is my ${partnerLabel}`
    : 'I am not married';

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {person.age !== undefined ? (
        <p className="Person__age">{`I am ${age}`}</p>
      ) : null}
      <p className="Person__partner">{partnerNode}</p>
    </section>
  );
};
