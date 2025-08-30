export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName = null } = person;
  const hasAge = person.age !== undefined;
  const partnerLabel = sex === 'm' ? 'wife' : 'husband';

  const maritalBlock = isMarried ? (
    <p className="Person__partner">
      My {partnerLabel} is {partnerName}.
    </p>
  ) : (
    <p className="Person__partner">I am not married.</p>
  );

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {hasAge && <p className="Person__age">{`I am ${age} years old.`}</p>}
      {maritalBlock}
    </section>
  );
};
