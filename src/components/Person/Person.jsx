export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;
  let partnerLabel = '';

  if (isMarried) {
    const relationship = sex === 'm'
    ? 'wife'
    : 'husband';

    partnerLabel = `${partnerName} is my ${relationship}`;
  } else {
    partnerLabel = 'I am not married';
  }

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>

      {age !== undefined && <p className="Person__age">I am {age}</p>}

      <p className="Person__partner">{partnerLabel}</p>
    </section>
  );
};
