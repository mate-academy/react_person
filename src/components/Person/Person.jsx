export const Person = ({ person }) => {
  const textName = `My name is ${person.name}`;
  const textAge = person.age ? `I am ${person.age}` : '';
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
      <h2 className="Person__name">{textName}</h2>
      {person.age && (
        <p className="Person__age">{textAge}</p>
      )}
      <p className="Person__partner">{partnerText}</p>
    </section>
  );
};
