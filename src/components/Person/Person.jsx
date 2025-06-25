export const Person = ({ person }) => {
  const hasValidAge = Number.isFinite(person.age) && person.age > 0;
  const isFemale = person.sex === 'f';
  const isMarried = person.isMarried;

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>

      {hasValidAge && (
        <p className="Person__age">
          I am {person.age}
        </p>
      )}

      {isMarried
        ? (
          <p className="Person__partner">
            {person.partnerName} is my{' '}
            {isFemale ? 'husband' : 'wife'}
          </p>
        )
        : (
          <p className="Person__partner">
            I am not married
          </p>
        )}
    </section>
  );
};
