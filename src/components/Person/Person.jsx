export const Person = ({
  person: {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  },
}) => (

  <section className="Person">
    <h2 className="Person__name">
      {`My name is ${name}`}
    </h2>
    {age !== undefined
      ? <p className="Person__age">{`I am ${age}`}</p>
      : ''}
    <p className="Person__partner">
      {isMarried === false && 'I am not married'}
      {isMarried === true
      && (sex === 'm' ? (
        `${partnerName} is my wife`
      ) : (
        `${partnerName} is my husband`
      ))}
    </p>
  </section>
);
