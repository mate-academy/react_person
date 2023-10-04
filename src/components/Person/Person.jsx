export const Person = ({
  person: {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  },
}) => {
  const notMarriedMessage = 'I am not married';
  const marriedMessage = `${partnerName} is my ${sex === 'f'
    ? 'husband'
    : 'wife'}`;

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>
      <>
        {age !== undefined && (
          <p className="Person__age">
              {`I am ${age}`}
          </p>
        )}
      </>

      <p className="Person__partner Person__partner--true">
        {isMarried
          ? marriedMessage
          : notMarriedMessage }
      </p>
    </section>
  );
};
