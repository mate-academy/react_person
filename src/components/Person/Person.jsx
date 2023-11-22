export const Person = ({
  person,
  partner = person.sex === 'm' ? 'wife' : 'husband',
}) => (

  <section className="Person">
    <h2 className="Person__name">{`My name is ${person.name}`}</h2>

    {person.age >= 0 && <p className="Person__age">{`I am ${person.age}`}</p>}

    {person.isMarried ? (
      <p className="Person__partner">{`${person.partnerName} is my ${partner}`}</p>
    ) : (
      <p className="Person__partner">I am not married</p>
    )}
  </section>
);
