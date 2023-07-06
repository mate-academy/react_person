export const Person = ({
  person: { name, age, sex, isMarried, partnerName },
}) => {
  const status = isMarried && (
    sex === 'm'
      ? `${partnerName} is my wife`
      : `${partnerName} is my husband`);

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>

      <p className="Person__age">
        {age && `I am ${age}`}
      </p>

      <p className="Person__partner">
        {!isMarried && `I am not married`}
        {status}
      </p>
    </section>
  );
};
