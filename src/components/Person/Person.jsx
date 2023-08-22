const SEX_MALE = 'm';

export const Person = ({ person }) => {
  const { name, age, partnerName, sex, isMarried } = person;
  const partnerInfo = `${partnerName} is my ${sex === SEX_MALE ? `wife` : `husband`}`;

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
          ? (partnerInfo)
          : `I am not married`
        }
      </p>
    </section>
  );
};
