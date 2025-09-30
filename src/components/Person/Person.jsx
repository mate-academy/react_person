export const Person = ({ person }) => {
  const personName = `My name is ${person.name}`;
  const personAge = person.age ? `I am ${person.age}` : null;

  let personText;

  if (person.isMarried) {
    if (person.sex === 'm') {
      personText = `${person.partnerName} is my wife`;
    } else {
      personText = `${person.partnerName} is my husband`;
    }
  } else {
    personText = 'I am not married';
  }

  return (
    <section className="Person">
      <h2 className="Person__name">{personName}</h2>
      {personAge && <p className="Person__age">{personAge}</p>}
      <p className="Person__partner">{personText}</p>
    </section>
  );
};
