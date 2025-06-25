export const Person = ({ person }) => {
  const isMarried = () => {
    if (person.isMarried === false) {
      return 'I am not married';
    }

    return person.sex === 'm'
      ? `${person.partnerName} is my wife`
      : `${person.partnerName} is my husband`;
  };

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>
      {person.age !== undefined ? (
        <p className="Person__age">I am {person.age}</p>
      ) : null}

      <p className="Person__partner">{isMarried()}</p>
    </section>
  );
};
