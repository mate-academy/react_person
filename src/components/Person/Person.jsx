export const Person = ({ person }) => {
  const love = person.sex === 'm' ? 'wife' : 'husband';
  const status = person.isMarried ? (
    <p className="Person__partner">
      {person.partnerName} is my {love}
    </p>
  ) : (
    <p className="Person__partner">I am not married</p>
  );

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>
      {person.sex === 'm' && <p className="Person__age">I am {person.age}</p>}
      {status}
    </section>
  );
};
