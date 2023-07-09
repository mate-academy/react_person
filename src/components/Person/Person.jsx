export const Person = ({ person }) => {
  const nameText = `My name is ${person.name}`;
  const ageText = `I am ${person.age}`;

  let marriageStatus;

  if (person.isMarried) {
    marriageStatus = `${person.partnerName} is my ${person.sex === 'm' ? 'wife' : 'husband'}`;
  } else {
    marriageStatus = 'I am not married';
  }

  return (
    <section className="Person">
      <h2 className="Person__name">{nameText}</h2>
      {person.age && <p className="Person__age">{ageText}</p>}
      <p className="Person__partner">{marriageStatus}</p>
    </section>
  );
};
