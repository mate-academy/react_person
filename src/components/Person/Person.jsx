export const Person = ({ person }) => {
  const married = (sex, partnerName) => {
    if (sex === 'm') {
      return `${partnerName} is my wife`;
    }

    return `${partnerName} is my husband`;
  };

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>

      {person.age && <p className="Person__age">I am {person.age}</p>}

      <p className="Person__partner">
        {person.isMarried
          ? married(person.sex, person.partnerName)
          : 'I am not married'}
      </p>
    </section>
  );
};
