export const Person = ({ person }) => {
  const {
    name,
    age,
    sex,
    partnerName,
  } = person;

  const spouse = sex === 'm'
    ? 'wife'
    : 'husband';

  const marriage = person.isMarried
    ? `${partnerName} is my ${spouse}`
    : `I am not married`;

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {person.age >= 0 && (
        <p className="Person__age">{`I am ${age}`}</p>
      )}
      <p className="Person__partner">
        {marriage}
      </p>
    </section>
  );
};
