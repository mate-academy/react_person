export const Person = ({ person }) => {
  const showAge = person.age !== undefined && person.age !== 0;

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>
      {showAge && <p className="Person__age">I am {person.age}</p>}
      {person.isMarried ? (
        <p className="Person__partner">
          {person.partnerName} is my {person.sex === 'f' ? 'husband' : 'wife'}
        </p>
      ) : (
        <p className="Person__partner">I am not married</p>
      )}
    </section>
  );
};
