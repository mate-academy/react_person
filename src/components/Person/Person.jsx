export const Person = ({ person }) => {
  const { name, age = 0, sex, isMarried, partnerName } = person;
  const personPartnerMessage = (sex === 'm')
    ? `${partnerName} is my wife`
    : `${partnerName} is my husband`;

  return (

    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age
        ? <p className="Person__age">{`I am ${age}`}</p>
        : null}
      <p className="Person__partner">
        {isMarried
          ? personPartnerMessage
          : `I am not married`
        }
      </p>
    </section>
  );
};
