export const Person = ({ person }) => {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = person;

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>

      {age
      && (
        <p className="Person__age">
          {`I am ${age}`}
        </p>
      )}

      <p className="Person__partner">
        {!isMarried
          ? `I am not married`
          : `${partnerName} is my ${sex === 'm'
            ? `wife`
            : `husband`}`}
      </p>
    </section>
  );
};
