export const Person = ({ person }) => {
  const relation =
    person.sex === 'm'
      ? `${person.partnerName} is my wife`
      : `${person.partnerName} is my husband`;

  return (
    <div className="App">
      <section className="Person">
        <h2 className="Person__name">{`My name is ${person.name}`}</h2>
        {person.age && <p className="Person__age">{`I am ${person.age}`}</p>}
        <p className="Person__partner">
          {!person.isMarried ? 'I am not married' : relation}
        </p>
      </section>
    </div>
  );
};
