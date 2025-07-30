export const Person = ({ person }) => {
  let maried;

  if (person.isMarried === true) {
    if (person.sex === 'f') {
      maried = `${person.partnerName} is my husband`;
    } else {
      maried = `${person.partnerName} is my wife`;
    }
  } else {
    maried = 'I am not married';
  }

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${person.name}`}</h2>
      <p className="Person__age">{person.age && `I am ${person.age}`}</p>
      <p className="Person__partner">{maried}</p>
    </section>
  );
};
