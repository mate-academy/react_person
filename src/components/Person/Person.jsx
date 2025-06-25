// export const Person = ({ person }) => ();

export const Person = ({ person }) => {
  let marriedText = '';

  if (person.isMarried) {
    if (person.sex === 'm') {
      marriedText = `${person.partnerName} is my wife`;
    } else {
      marriedText = `${person.partnerName} is my husband`;
    }
  } else {
    marriedText = 'I am not married';
  }

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>
      {person.age && <p className="Person__age">I am {person.age}</p>}
      <p className="Person__partner">{marriedText}</p>
    </section>
  );
};
