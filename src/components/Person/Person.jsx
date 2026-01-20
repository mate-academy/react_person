export const Person = ({ person }) => {
  const merried = (
    <p className="Person__partner">
      {person.isMarried
        ? `${person.partnerName} is my ${person.sex === 'm' ? 'wife' : 'husband'}`
        : `I am not married`}
    </p>
  );

  const age = person.age && <p className="Person__age">I am {person.age}</p>;

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>
      {age}
      {merried}
    </section>
  );
};
