export const Person = ({ person }) => {
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
      <h2 className="Person__name">{`My name ${person.name}`}</h2>
      {person.age && (
        <p className="Person__age">{`I am ${person.age} years old`}</p>
      )}
      <p className="Person__partner">{partnerText}</p>
    </section>
  );
};
