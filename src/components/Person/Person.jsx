export const Person = ({ person }) => {
  const personSex = person.sex === 'f' ? (
    `${person.partnerName} is my husband`
  ) : (
    `${person.partnerName} is my wife`
  );

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${person.name}`}
      </h2>
      {person.age > 0 && (
        <p className="Person__age">
          {`I am ${person.age}`}
        </p>
      )}

      {!person.isMarried ? (
        <p className="Person__partner">
          I am not married
        </p>
      ) : (
        <p className="Person__partner">
          {personSex}
        </p>
      )}
    </section>
  );
};
