export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;
  const ageBlock =
    age != null ? <p className="Person__age">{`I am ${age}`}</p> : null;

  let partnerLabel;

  if (!isMarried) {
    partnerLabel = 'I am not married';
  } else if (sex === 'm') {
    partnerLabel = `${partnerName} is my wife`;
  } else {
    partnerLabel = `${partnerName} is my husband`;
  }

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {ageBlock}

      <p className="Person__partner">{partnerLabel}</p>
    </section>
  );
};
