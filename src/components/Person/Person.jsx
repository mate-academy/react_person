export const Person = ({ person }) => {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = person;

  const MALE = 'm';
  const notMarried = 'I am not married';
  const personPartner = (sex === MALE)
    ? 'wife'
    : 'husband';

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>

      {age > 0 && (
        <p className="Person__age">
          {`I am ${age}`}
        </p>
      )}

      <p className="Person__partner">
        {!isMarried
          ? notMarried
          : `${partnerName} is my ${personPartner}`
        }
      </p>
    </section>
  );
};
