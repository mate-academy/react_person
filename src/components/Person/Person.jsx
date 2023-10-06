export const Person = ({ person }) => {
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
      <h2 className="Person__name">{`My name ${person.name}`}</h2>
      <p className="Person__age">{person.age ? `I am ${person.age}` : null}</p>
      <p className="Person__partner">{partnerText}</p>
    </section>
  );
};
