export const Person = ({ person }) => {
  let partnerContent = '';

  if (person.isMarried) {
    if (person.sex === 'm') {
      partnerContent = `${person.partnerName} is my wife`;
    } else {
      partnerContent = `${person.partnerName} is my husband`;
    }
  } else {
    partnerContent = 'I am not married';
  }

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${person.name}`}</h2>
      {person.age !== undefined && (
        <p className="Person__age">{`I am ${person.age}`}</p>
      )}
      <p className="Person__partner">{partnerContent}</p>
    </section>
  );
};
