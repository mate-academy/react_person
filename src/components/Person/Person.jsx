export const Person = ({ person }) => {
  if (!person) {
    return null;
  }

  const { name, age, sex, isMarried, partnerName } = person;

  const partnerTitle = sex === 'm' ? 'wife' : 'husband';

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>

      {age !== undefined && <p className="Person__age">I am {age}</p>}

      <p className="Person__partner">
        {isMarried
          ? `${partnerName} is my ${partnerTitle}`
          : 'I am not married'}
      </p>
    </section>
  );
};
