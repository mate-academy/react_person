export const Person = ({ person }) => {
  const { name, age, sex, partnerName, isMarried } = person;
  const SEX_FEMALE = 'f';
  const partner = sex === SEX_FEMALE ? 'husband' : 'wife';

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>

      {age && (
        <p className="Person__age">
          {`I am ${age}`}
        </p>
      )}

      <p className="Person__partner">
        {isMarried
          ? `${partnerName} is my ${partner}`
          : 'I am not married'}
      </p>
    </section>
  );
};
