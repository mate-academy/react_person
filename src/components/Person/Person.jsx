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

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {person.age !== undefined && (
        <p className="Person__age">{`I am ${age}`}</p>
      )}
      <p className="Person__partner">
        {person.isMarried
          ? `${partnerName} is my ${spouse}`
          : `I am not married`}
      </p>
    </section>
  );
};
