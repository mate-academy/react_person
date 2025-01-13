export const Person = ({ person }) => {
  let relationship = null;

  if (person.isMarried) {
    if (person.sex === 'm') {
      relationship = 'wife';
    } else if (person.sex === 'f') {
      relationship = 'husband';
    }
  }

  return (
    <div className="App">
      <section className="Person">
        <p className="Person__name">My name is {person.name}</p>
        {person.age > 0 && <p className="Person__age">I am {person.age}</p>}
        <p className="Person__partner">
          {person.isMarried
            ? `${person.partnerName} is my ${relationship}`
            : 'not married'}
        </p>
      </section>
    </div>
  );
};
