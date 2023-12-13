export const Person = ({ ...person }) => {
  const partner = person.sex === 'f' ? 'husband' : 'wife';

  return (
    <div className="App">
      <section className="Person">
        <h2 className="Person__name">
          {`My name is ${person.name}`}
        </h2>

        <p className="Person__age">
          {person.age ? `I am ${person.age}` : null}
        </p>

        <p className="Person__partner">
          {person.isMarried
            ? `${person.partnerName} is my ${partner}`
            : 'I am not married'}
        </p>
      </section>
    </div>
  );
};
