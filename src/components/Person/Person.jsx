// export const Person = ({ person }) => ();
export const Person = ({ person }) => (
  <section className="Person">
    <h2 className="Person__name">{`My name is ${person.name}`}</h2>

    {
      Object.hasOwn(person, 'age') && (
        <p className="Person__age">{`I am ${person.age}`}</p>
      )
    }

    {
      person.isMarried ? (
        <p className="Person__partner">
          {person.sex === 'm' ? (
            `${person.partnerName} is my wife`
          ) : (
            `${person.partnerName} is my husband`
          )}
        </p>
      ) : (
        <p className="Person__partner">I am not married</p>
      )
    }
  </section>
);
