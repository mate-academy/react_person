export const Person = ({ person: {
  name,
  age,
  sex,
  isMarried,
  partnerName,
} }) => {
  const partnerRole = `${partnerName} is my ${sex === 'f' ? (
    'husband'
  ) : (
    'wife'
  )}`;

  return (
    <>
      <section className="Person">
        <h2 className="Person__name">
          {`My name is ${name}`}
        </h2>

        {age && (
          <p className="Person__age">
            {`I am ${age}`}
          </p>
        )}

        <p className="Person__partner">
          {!isMarried ? (
            'I am not married'
          ) : (
            partnerRole
          )}
        </p>
      </section>
    </>
  );
};
