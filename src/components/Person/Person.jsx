export const Person = ({ person }) => {
  const {
    name,
    age = null,
    sex,
    isMarried,
    partnerName,
  } = person;

  const sexCheck = (sex === 'f')
    ? `${partnerName} is my husband`
    : `${partnerName} is my wife`;

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>

      <p className="Person__age">
        {age && `I am ${age}`}
      </p>

      <p className="Person__partner">
        {isMarried
          ? sexCheck
          : `I am not married`
        }
      </p>
    </section>
  );
};
