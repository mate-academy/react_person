export const Person = ({ person }) => {
  const hasAge = person.age !== undefined;
  const partnerLabel = person.gender === 'male' ? 'wife' : 'husband';

  const maritalBlock = person.isMarried ? (
    <p className="Person__partner">
      My {partnerLabel} is {person.partnerName}.
    </p>
  ) : (
    <p className="Person__partner">I am not married.</p>
  );

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>
      {hasAge && <p className="Person__age">{`I am ${person.age}`}</p>}
      {maritalBlock}
    </section>
  );
};
