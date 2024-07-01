export const Person = ({ person = {} }) => {
  let marriedPargraph = <p className="Person__partner">I am not married</p>;

  if (person.isMarried) {
    if (person.sex === 'm') {
      marriedPargraph = (
        <p className="Person__partner">{person.partnerName} is my wife</p>
      );
    } else {
      marriedPargraph = (
        <p className="Person__partner">{person.partnerName} is my husband</p>
      );
    }
  }

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>
      {'age' in person && <p className="Person__age">I am {person.age}</p>}
      {marriedPargraph}
    </section>
  );
};
