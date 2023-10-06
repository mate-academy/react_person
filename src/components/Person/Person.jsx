export const Person = ({ person }) => {
  const nameText = `My name is ${person.name}`;
  const ageText = person.age ? `I am ${person.age}` : null;
  let partnerText = '';

  if (person.isMarried === false) {
    partnerText = 'I am not married';
  } else {
    partnerText = person.sex === 'm'
      ? `${person.partnerName} is my wife`
      : `${person.partnerName} is my husband`;
  }

  return (
    <section className="Person">
      <h2 className="Person__name">{nameText}</h2>
      <p className="Person__age">{ageText}</p>
      <p className="Person__partner">{partnerText}</p>
    </section>
  );
};
