// export const Person = ({ person }) => ();
export const Person = ({ person }) => {
  let marriedText = 'I am not married';

  if (person.isMarried) {
    if (person.sex === 'm') {
      marriedText = `${person.partnerName} is my wife`;
    }

    if (person.sex === 'f') {
      marriedText = `${person.partnerName} is my husband`;
    }
  }

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${person.name}`}</h2>
      {person.age && <p className="Person__age">{`I am ${person.age}`}</p>}
      <p className="Person__partner">{marriedText}</p>
    </section>
  );
};
