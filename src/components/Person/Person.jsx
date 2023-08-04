export const Person = ({ person }) => (
  // ({let partner = person.sex === 'f' ? 'husband' : 'wife'})

  <section className="Person">
    <h2 className="Person__name">
      {`My name is ${person.name}`}
    </h2>

    {person.age !== undefined && (
      <p className="Person__age">
        {`I am ${person.age}`}
      </p>
    )}

    <p className="Person__partner">
      {person.isMarried === true
        ? `${person.partnerName} is my ${person.sex === 'f'
          ? `husband`
          : `wife`}`
        : `I am not married`
      }
    </p>
  </section>
);
