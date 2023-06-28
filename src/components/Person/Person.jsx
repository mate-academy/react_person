export const Person = (
  { person: { name, age, sex, isMarried, partnerName } },
) => {
  const marriedWife = isMarried === true && sex === 'f';
  const marriedHusband = isMarried === true && sex === 'm';

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age > 0 && <p className="Person__age">{`I am ${age}`}</p>}
      <p className="Person__partner">{marriedWife && `${partnerName} is my husband`}</p>
      <p className="Person__partner">{marriedHusband && `${partnerName} is my wife`}</p>
      <p className="Person__partner">{!isMarried && `I am not married`}</p>
    </section>
  );
};
