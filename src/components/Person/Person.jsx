const FEMALE = 'f';
const HUSBAND = 'husband';
const WIFE = 'wife';
const NOT_MARRIED_STATUS_MESSAGE = 'I am not married';

export const Person = ({ person }) => {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = person;

  const TYPE_OF_PARTNER = `${sex === FEMALE ? HUSBAND : WIFE}`;

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
          ? `${partnerName} is my ${TYPE_OF_PARTNER}`
          : NOT_MARRIED_STATUS_MESSAGE}
      </p>
    </section>
  );
};
