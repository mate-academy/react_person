export const Person = ({ person }) => {
  const partnerLabel = person.sex === 'm' ? 'wife' : 'husband';
  const maritalStatus = person.isMarried;

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>

      {person.age !== undefined && (
        <p className="Person__age">I am {person.age}</p>
      )}
      {maritalStatus ? (
        <p className="Person__partner">
          {person.partnerName} is my {partnerLabel}
        </p>
      ) : (
        <p className="Person__partner">I am not married</p>
      )}
    </section>
  );
};
