export const Person = ({ person }) => {
  const wifeOrHusband = person.sex === 'm'
    ? 'wife'
    : 'husband';

  const ageClassName = person.age
    ? 'Person__age'
    : '';

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>
      <p className={ageClassName}>
        {person.age
          ? `I am ${person.age}`
          : null}
      </p>
      <p className="Person__partner">
        {person.isMarried === true
          ? `${person.partnerName} is my ${wifeOrHusband}`
          : 'I am not married'}
      </p>
    </section>
  );
};
