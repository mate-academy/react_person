export const Person = ({ person }) => {
  let label = <p className="Person__partner">I am not married</p>;

  if (person.isMarried === true) {
    if (person.sex === 'f') {
      label = (
        <p className="Person__partner">{person.partnerName} is my husband</p>
      );
    } else {
      label = (
        <p className="Person__partner">{person.partnerName} is my wife</p>
      );
    }
  }

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>
      {person.age && <p className="Person__age">I am {person.age}</p>}
      {label}
    </section>
  );
};
