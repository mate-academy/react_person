export const Person = ({ person }) => (
  <section className="Person">
    <h2 className="Person__name">
      {`My name is ${person.name}`}
    </h2>
    {
      person.age > 0 && (
        <p className="Person__age">
          I am
          {` ${person.age}`}
        </p>
      )}

    {
      person.isMarried === false
        ? (`I am not married`)
        : (
          (person.sex === 'm'
            && (`${person.partnerName} is my wife`)
          )
          || (person.sex === 'f'
              && (`${person.partnerName} is my husband`)
          )
        )
    }
  </section>
);
