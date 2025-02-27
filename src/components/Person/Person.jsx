export const Person = ({ person }) => {
  let ageLabel = null;
  let partnerLabel = 'I am not married';

  if (person.isMarried) {
    if (person.sex === 'm') {
      partnerLabel = `${person.partnerName} is my wife`;
    } else {
      partnerLabel = `${person.partnerName} is my husband`;
    }
  }

  if (person.age) {
    ageLabel = <p className="Person__age">I am {person.age}</p>;
  }

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>
      {ageLabel}
      <p className="Person__partner">{partnerLabel}</p>
    </section>
  );
};
