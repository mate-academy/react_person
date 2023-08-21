const SEX_MALE = 'm';

export const Person = ({
  person: { name, age, sex, isMarried, partnerName },
}) => {
  const partnerInfo = sex === SEX_MALE ? (
    `${partnerName} is my wife`
  ) : (
    `${partnerName} is my husband`
  );

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>

      {typeof age === 'number' && (
        <p className="Person__age">
          {`I am ${age}`}
        </p>
      )}

      <p className="Person__partner">
        {isMarried
          ? (partnerInfo)
          : `I am not married`}
      </p>
    </section>
  );
};
