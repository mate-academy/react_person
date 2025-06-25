export const Person = ({ person }) => {
  const married =
    person.sex === 'm' ? (
      <p className="Person__partner">{person.partnerName} is my wife</p>
    ) : (
      <p className="Person__partner">{person.partnerName} is my husband</p>
    );

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>
      {person.age !== undefined && (
        <p className="Person__age">I am {person.age}</p>
      )}
      {person.isMarried ? (
        married
      ) : (
        <p className="Person__partner">I am not married</p>
      )}
    </section>
  );
};
