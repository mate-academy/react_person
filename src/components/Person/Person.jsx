export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  let partnerStatus;

  if (!isMarried) {
    partnerStatus = 'I am not married';
  } else if (sex === 'm') {
    partnerStatus = `wife ${partnerName}`;
  } else {
    partnerStatus = `husband ${partnerName}`;
  }

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>

      {age && <p className="Person__age">{`I am ${age}`}</p>}

      <p className="Person__partner">{partnerStatus}</p>
    </section>
  );
};
