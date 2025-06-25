export const Person = ({ person }) => {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = person;

  const partner = (personSex, personName) => (
    personSex === 'm'
      ? `${personName} is my wife`
      : `${personName} is my husband`
  );

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>

      {age && (
      <p className="Person__age">
        {`I am ${age}`}
      </p>
      )}

      {isMarried
        ? (
          <p className="Person__partner">
            {partner(sex, partnerName)}
          </p>
        )
        : (<p className="Person__partner">I am not married</p>)}
    </section>
  );
};
