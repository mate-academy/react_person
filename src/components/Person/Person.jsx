const Person = ({ person }) => {
  const isMale = person.sex === 'm';
  const isMarried = person.isMarried;
  const partnerStatus = isMale ? 'wife' : 'husband';

  const maritalStatus = isMarried
    ? `${person.partnerName} is my ${partnerStatus}.`
    : 'I am not married.';

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${person.name}`}</h2>
      {person.age && <p className="Person__age">{`I am ${person.age}`}</p>}
      <p className="Person__partner">{maritalStatus}</p>
    </section>
  );
};

export default Person;
