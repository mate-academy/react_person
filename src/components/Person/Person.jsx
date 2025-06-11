export const Person = ({ person }) => (
  <section className="Person">
    {/* name */}
    <h2 className="Person__name">{`My name is ${person.name}`}</h2>

    {/* age */}
    {person.age > null && <p className="Person__age">I am {person.age}</p>}

    {/* partner */}
    <p className="Person__partner">
      {person.isMarried &&
        `${person.partnerName} is my ${person.sex === 'm' ? 'wife' : 'husband'}`}
    </p>

    {/* partner = false */}
    <p className="Person__partner">
      {person.isMarried === false && `I am not married`}
    </p>
  </section>
);
