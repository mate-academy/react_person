export const Person = ({ person }) => {
  const choosePartner = person.sex === 'm'
    ? `wife`
    : `husband`;

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${person.name}`}
      </h2>

      {person.age && <p className="Person__age">{`I am ${person.age}`}</p>}

      <p className="Person__partner">
        {person.isMarried !== false ? (
          `${person.partnerName} is my ${choosePartner}`
        ) : (
          `I am not married`
        )}
      </p>
    </section>
  );
};
