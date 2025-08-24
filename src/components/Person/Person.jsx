export const Person = ({ person }) => {
  const age = person.age ? (
    <p className="Person__age">I am {person.age}</p>
  ) : null;
  const marige = person.isMarried ? (
    <p className="Person__partner">
      {person.partnerName} is my
      {person.sex === 'm' ? ' wife' : ' husband'}
    </p>
  ) : (
    <p className="Person__partner">I am not married</p>
  );

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>
      {age}
      {marige}
    </section>
  );
};
