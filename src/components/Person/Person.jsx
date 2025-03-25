export const Person = ({ person }) => {
  const marriedStatus = () => {
    if (person.isMarried) {
      const relation = person.sex === 'm' ? 'wife' : 'husband';

      return `${person.partnerName} is my ${relation}`;
    }

    return 'I am not married';
  };

  return (
    <section className="Person">
      {person?.name && (
        <h2 className="Person__name">{`My name is ${person.name}`}</h2>
      )}
      {person?.age && <p className="Person__age">{`I am ${person.age}`}</p>}
      <p className="Person__partner">{marriedStatus()}</p>
    </section>
  );
};
