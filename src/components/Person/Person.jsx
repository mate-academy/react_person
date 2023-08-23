export const Person = ({ person }) => {
  const {
    name,
    age,
    isMarried,
    partnerName,
    sex,
  } = person;

  const personPartnerInfo = sex === 'm'
    ? `${partnerName} is my wife`
    : `${partnerName} is my husband`;

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>

      {Boolean(age) && (
        <p className="Person__age">
          {`I am ${age}`}
        </p>
      )}

      <p className="Person__partner">
        {isMarried
          ? personPartnerInfo
          : 'I am not married'
        }
      </p>
    </section>
  );
};
