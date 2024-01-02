export const Person = ({ person }) => {
  const nameContent = `My name is ${person.name}`;

  let partnerContent;

  if (person.isMarried) {
    partnerContent = person.sex === 'f'
      ? `${person.partnerName} is my husband`
      : `${person.partnerName} is my wife`;
  } else {
    partnerContent = 'I am not married';
  }

  let ageContent;

  if (person.age !== undefined) {
    ageContent = <p className="Person__age">{`I am ${person.age}`}</p>;
  } else {
    ageContent = null;
  }

  return (
    <section className="Person">
      <h2 className="Person__name">{nameContent}</h2>
      {ageContent}
      <p className="Person__partner">{partnerContent}</p>
    </section>
  );
};
