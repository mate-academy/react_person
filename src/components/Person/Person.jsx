export const Person = ({ person }) => {
  let partnerMessage = '';

  if (person.isMarried === false) {
    partnerMessage = 'I am not married';
  } else if (person.sex === 'm') {
    partnerMessage = `${person.partnerName} is my wife`;
  } else if (person.sex === 'f') {
    partnerMessage = `${person.partnerName} is my husband`;
  }

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${person.name}`}
      </h2>
      {person.age > 0 && (
        <p className="Person__age">
          {`I am ${person.age}`}
        </p>
      )}
      {partnerMessage && (
        <p className="Person__partner">
          {partnerMessage}
        </p>
      )}
    </section>
  );
};
