export const Person = ({ person }) => {
  const partnerLabel = person.sex === 'm' ? 'wife' : 'husband';

  return (
    <section className="Person">
      <p className="Person__name">My name is {person.name}</p>

      {person.age && <p className="Person__age">I am {person.age}</p>}

      {person.isMarried ? (
        <p className="Person__partner">
          {person.partnerName} is my {partnerLabel}
        </p>
      ) : (
        <p className="Person__partner">not married</p>
      )}
    </section>
  );
};
