export const Person = ({ person }) => (
  <section className="Person">
    <h2 className="Person__name">
      {`My name is ${person.name}`}
    </h2>
    {person.age && (
      <p className="Person__age">
        {
          `I am ${person.age}`
        }
      </p>
    )}
    <p className="Person__partner">
      {isMarried(person)}
    </p>
  </section>
);

function isMarried(person) {
  if (person.isMarried && person.sex === 'm') {
    return `${person.partnerName} is my wife`;
  }

  if (person.isMarried && person.sex === 'f') {
    return `${person.partnerName} is my husband`;
  }

  return 'I am not married';
}
