export const Person = ({ person }) => (
  <section className="Person">
    <h2 className="Person__name">{ `My name is ${person.name}` }</h2>
    {person.age !== undefined && (
      <p className="Person__age">{ `I am ${person.age}` }</p>
    )}
    {person.isMarried === true
      ? (
        <p className="Person__partner">
          { `${person.partnerName} is my ` }
          {person.sex === 'm' && (
            <span>wife</span>
          )}
          {person.sex === 'f' && (
            <span>husband</span>
          )}
        </p>
      )
      : (
        <p className="Person__partner">I am not married</p>
      )}

  </section>
);
