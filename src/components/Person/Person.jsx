export const Person = ({ person }) => {
  let partnerMessage = '';

  if (!person.isMarried) {
    partnerMessage = 'I am not married';
  } else if (person.sex === 'm') {
    partnerMessage = `${person.partnerName} is my wife`;
  } else {
    partnerMessage = `${person.partnerName} is my husband`;
  }

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${person.name}`}</h2>

      {person.age && <p className="Person__age">{`I am ${person.age}`}</p>}

      <p className="Person__partner">{partnerMessage}</p>
    </section>
  );
};
