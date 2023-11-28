export const Person = ({ person }) => {
  const WIFE = 'wife';
  const HUSBAND = 'husband';

  const spouse = person.sex === 'm' ? WIFE : HUSBAND;

  const {
    name,
    age,
    partnerName,
  } = person;

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>

      {person.age !== undefined && (
      <p className="Person__age">
        {`I am ${age}`}
      </p>
      )}

      <p className="Person__partner">
        {person.isMarried
          ? `${partnerName} is my ${spouse}`
          : 'I am not married'}
      </p>
    </section>
  );
};
