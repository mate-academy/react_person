export const Person = ({ person }) => (
  <section className="Person">
    <h2 className="Person__name">{`My name is ${person.name}`}</h2>
    {person.age && (
    <p className="Person__age">{`I am ${person.age}`}</p>
    )}

    {person.isMarried ? (
      <p className="Person__partner">
        {`${person.partnerName} is ${person.sex === 'm'
          ? 'my wife'
          : 'my husband'}`
        }
      </p>
    ) : (
      <p className="Person__partner">I am not married</p>
    )}
  </section>
);
