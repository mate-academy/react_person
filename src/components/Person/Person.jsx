export const Person = ({ person }) => {
  let partnerInfo;

  if (person.isMarried) {
    if (person.sex === "m") {
      partnerInfo = <p className="Person__partner">{person.partnerName} is my wife</p>;
    } else {
      partnerInfo = <p className="Person__partner">{person.partnerName} is my husband</p>;
    }
  } else {
    partnerInfo = <p className="Person__partner">I am not married</p>;
  }

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>

      {"age" in person
        ? <p className="Person__age">I am {person.age}</p>
        : null
      }

      {partnerInfo}
    </section>
  );
};
