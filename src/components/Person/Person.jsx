export const Person = ({ person }) => {
  const info =
    person.sex === 'm'
      ? `${person.partnerName} is my wife`
      : `${person.partnerName} is my husband`;

  return (
    <section className="Person">
      <>
        <h2 className="Person__name">My name is {person.name}</h2>
        {person.age && person.age !== 0 && (
          <p className="Person__age">I am {person.age}</p>
        )}
        <p className="Person__partner">
          {person.isMarried ? info : 'I am not married'}
        </p>
      </>
    </section>
  );
};
