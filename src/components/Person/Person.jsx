export const Person = ({ person }) => {
  const {
    name,
    age,
    partnerName,
    sex,
    isMarried,
  } = person;

  const MALE = 'm';
  const WIFE = 'wife';
  const HUSBAND = 'husband';

  const partner = sex === MALE ? WIFE : HUSBAND;

  return (
    <section className="Person">
      <h2 className="Person__name">
        { `My name is ${name}` }
      </h2>

      {Boolean(age) && (
        <p className="Person__age">
          {`I am ${age}`}
        </p>
      )}

      <p className="Person__partner">
        {isMarried
          ? `${partnerName} is my ${partner}`
          : `I am not married`
        }
      </p>
    </section>
  );
};
