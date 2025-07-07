export const Person = ({ person }) => {
  const personAge =
    person.age !== undefined ? (
      <p className="Person__age">I am {person.age}</p>
    ) : (
      ''
    );

  let partnerSex = '';
  let partnerLabel = '';

  if (person.isMarried) {
    if (person.sex === 'f') {
      partnerSex = 'husband';
    } else {
      partnerSex = 'wife';
    }
  }

  if (!person.isMarried) {
    partnerLabel = 'I am not married';
  } else {
    partnerLabel = `${person.partnerName} is my ${partnerSex}`;
  }

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>
      {personAge}
      <p className="Person__partner">{partnerLabel}</p>
    </section>
  );
};
