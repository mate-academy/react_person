export const Person = ({ person }) => {
  let partnerStatus;

  if (person.isMarried) {
    partnerStatus = person.sex === 'm'
      ? `${person.partnerName} is my wife`
      : `${person.partnerName} is my husband`;
  } else {
    partnerStatus = 'I am not married';
  }

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${person.name}`}</h2>
      {person.age && (
        <p className="Person__age">{`I am ${person.age}`}</p>
      )}
      <p className="Person__partner">{partnerStatus}</p>
    </section>
  );
};
