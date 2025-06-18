export const Person = ({ person }) => {
  let socialStatus = <p className="Person__partner">I am not married</p>;

  if (person.isMarried === true) {
    if (person.sex === 'm') {
      socialStatus = (
        <p className="Person__partner">{person.partnerName} is my wife</p>
      );
    } else {
      socialStatus = (
        <p className="Person__partner">{person.partnerName} is my husband</p>
      );
    }
  }

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>
      {person.age !== undefined && (
        <p className="Person__age">I am {person.age}</p>
      )}
      {socialStatus}
    </section>
  );
};
