export const Person = ({ person }) => {
  let mari;

  if (person.isMarried === true) {
    if (person.sex === 'f') {
      mari = `${person.partnerName} is my husband`;
    } else {
      mari = `${person.partnerName} is my wife`;
    }
  } else {
    mari = 'I am not married';
  }

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${person.name}`}</h2>
      <p className="Person__age">{person.age && `I am ${person.age}`}</p>
      <p className="Person__partner">{mari}</p>
    </section>
  );
};
