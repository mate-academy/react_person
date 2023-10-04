export const Person = ({
  person: {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  },
}) => {
  // Created Variable for the type of Partner
  const partnerType = sex === 'm' ? (
    `${partnerName} is my wife`
  ) : (
    `${partnerName} is my husband`
  );

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>

      {age && ( // no more ternary operator
        <p className="Person__age">
          {`I am ${age}`}
        </p>
      )}

      <p className="Person__partner">
        {/* isMarried made into ternary operator */}
        {isMarried === false ? 'I am not married' : partnerType}
      </p>
    </section>
  );
};
