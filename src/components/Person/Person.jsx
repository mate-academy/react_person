export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  let partnerText;

  if (!isMarried) {
    partnerText = 'I am not married';
  } else {
    partnerText =
      sex === 'm'
        ? `${partnerName} is my wife`
        : `${partnerName} is my husband`;
  }

  const ageText = age ? `I am ${person.age}` : null;

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {ageText && <p className="Person__age">{ageText}</p>}
      <p className="Person__partner">{partnerText}</p>
    </section>
  );
};
