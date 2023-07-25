export const Person = ({ person }) => (
  <div className="App">
    <section className="Person">
      <h2 className="Person__name">{`My name is ${person.name}`}</h2>
      <p className="Person__age">
        {person.age
          && `I am ${person.age}`
        }
      </p>
      <p className="Person__partner">
        {person.isMarried
          ? (
            <p className="Person__partner">
              { person.sex === 'm'
                ? `${person.partnerName} is my wife`
                : `${person.partnerName} is my husband`}
            </p>
          ) : (
            <p className="Person__partner">
              I am not married
            </p>
          )
        }
      </p>
    </section>
  </div>
);
