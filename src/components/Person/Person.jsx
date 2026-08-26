export const Person = ({ person }) => {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = person;

  const hasHusband = isMarried && sex === 'f';
  const hasWife = isMarried && sex === 'm';

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>

    {age && (
      <p className="Person__age">
        I am {age}
      </p>
    )}

      <p className="Person__partner">
        {hasHusband && `${partnerName} is my husband`}
        {hasWife && `${partnerName} is my wife`}
        {!isMarried && 'I am not married'}
      </p>
    </section>
  );
};
