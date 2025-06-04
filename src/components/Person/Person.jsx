export const Person = ({ person }) => {
  let married = <p>I am not married</p>;

  if (person.isMarried) {
    married =
      person.sex === 'm' ? (
        <p>{person.partnerName} is my wife</p>
      ) : (
        <p>{person.partnerName} is my husband</p>
      );
  }

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>
      {person.age && <p className="Person__age">I am {person.age}</p>}
      <p className="Person__partner">{married}</p>
    </section>
  );
};
