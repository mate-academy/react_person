// export const Person = ({ person }) => ();
export const Person = ({ person }) => (
  <section className="Person">
    <h2 className="Person__name">
      {`My name is ${person.name}`}
    </h2>
    {person.age !== undefined && (
    <p
      className="Person__age"
      style={{
        display: person.age ? 'block' : 'none',
      }}
    >
      {`I am ${person.age}`}
    </p>
    )}
    <p className="Person__partner">
      {person.isMarried === true
        ? `${person.partnerName} is my ${person.sex === 'm' ? 'wife' : 'husband'}`
        : `I am not married`
      }
    </p>
  </section>
);
