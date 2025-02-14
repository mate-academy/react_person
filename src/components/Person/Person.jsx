// export const Person = ({ person }) => ();
export const Person = ({ person }) => {
  let ageText = null;

  if (person.age) {
    ageText = <p className="Person__age">I am {person.age}</p>;
  }

  let marriedText;

  if (person.sex === 'm' && person.isMarried) {
    marriedText = (
      <p className="Person__partner">{person.partnerName} is my wife</p>
    );
  } else if (person.sex === 'f' && person.isMarried) {
    marriedText = (
      <p className="Person__partner">{person.partnerName} is my husband</p>
    );
  } else {
    marriedText = <p className="Person__partner">I am not married</p>;
  }

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>
      {ageText}
      {marriedText}
    </section>
  );
};
