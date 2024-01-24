export const Person = ({ person }) => {
  const who = person.sex === 'm' ? 'wife' : 'husband';

  return (
    <section className="Person">
      <h1 className="Person__name">
        {`My name is ${person.name}`}
      </h1>

      {person.age && (
        <p className="Person__age">
          {`I am ${person.age}`}
        </p>
      )}

      {person.isMarried ? (
        <p className="Person__partner">
          {`${person.partnerName} is my ${who}`}
        </p>
      ) : (
        <p className="Person__partner">
          I am not married
        </p>
      )}
    </section>
  );
};
