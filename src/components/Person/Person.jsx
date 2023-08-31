export const Person = ({ person }) => {
  const isNotMarried = !person.isMarried;
  const isFemale = person.sex === 'f';
  const isMale = person.sex === 'm';

  let partnerText = '';

  if (isNotMarried) {
    partnerText = 'I am not married';
  } else if (isFemale) {
    partnerText = `${person.partnerName} is my husband`;
  } else if (isMale) {
    partnerText = `${person.partnerName} is my wife`;
  }

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${person.name}`}</h2>

      {person.age && <p className="Person__age">{`I am ${person.age}`}</p>}

      <p className="Person__partner">{partnerText}</p>
    </section>
  );
};
