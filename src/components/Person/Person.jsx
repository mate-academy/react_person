export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  const partner = sex === 'm' ? 'wife' : 'husband';

  const ageText =
    age !== undefined ? <p className="Person__age">I am {age}</p> : null;

  const partnerText = isMarried ? (
    <p className="Person__partner">
      {partnerName} is my {partner}
    </p>
  ) : (
    <p className="Person__partner">I am not married</p>
  );

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {ageText}
      {partnerText}
    </section>
  );
};
