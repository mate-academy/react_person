export function Person({ person }) {
  let marriedSentence;

  if (person.sex === 'm') {
    marriedSentence = (
      <p className="Person__partner">{person.partnerName} is my wife</p>
    );
  } else if (person.sex === 'f') {
    marriedSentence = (
      <p className="Person__partner">{person.partnerName} is my husband</p>
    );
  }

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>
      {person.age && <p className="Person__age">I am {person.age}</p>}
      {person.isMarried ? (
        marriedSentence
      ) : (
        <p className="Person__partner">I am not married</p>
      )}
    </section>
  );
}
