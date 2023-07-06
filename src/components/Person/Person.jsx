export const Person = ({ person }) => {
  let married;

  if (person.isMarried) {
    married = `${person.partnerName} is my ${person.sex === 'f' ? 'husband' : 'wife'}`;
  } else {
    married = `I am not married`;
  }

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${person.name}`}
      </h2>

      {'age' in person && (
        <p className="Person__age">
          {`I am ${person.age}`}
        </p>
      )}

      <p className="Person__partner">{married}</p>
    </section>
  );
};
