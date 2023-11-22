export const Person = ({ person }) => (
  <section className="Person">

    <h2 className="Person__name">
      {`My name is ${person.name}`}
    </h2>

    {person.age && (
      <p className="Person__age">
        {`I am ${person.age}`}
      </p>
    )}

    <p className="Person__partner">
      {(person.sex === 'm' && person.isMarried) && (
        `${person.partnerName} is my wife`
      )}

      {(person.sex === 'f' && person.isMarried) && (
        `${person.partnerName} is my husband`
      )}

      {person.isMarried === false && (
        `I am not married`
      )}
    </p>

  </section>
);
