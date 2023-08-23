const SEX_FEMALE = 'f';

export const Person = ({ person }) => {
  const {
    name,
    sex,
    age,
    isMarried,
    partnerName,
  } = person;

  const partnerStatus = sex === SEX_FEMALE
    ? 'husband'
    : 'wife';

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
          ? (`${partnerName} is my ${partnerStatus}`)
          : (`I am not married`)
        }
      </p>
    </section>
  );
};
