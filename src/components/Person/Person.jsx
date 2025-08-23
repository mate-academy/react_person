export const Person = ({ person }) => {
  const showAge = person.age !== undefined;

  const partnerLabel = person.sex === 'm' ? 'wife' : 'husband';

  const maritalContent = person.isMarried ? (
    <p className="Person__partner">
      {person.partnerName} is my {partnerLabel}
    </p>
  ) : (
    <p className="Person__partner">I am not married</p>
  );

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>

      {showAge && <p className="Person__age">I am {person.age}</p>}

      {maritalContent}
    </section>
  );
};
