export const Person = ({
  person: { name, age, sex, partnerName, isMarried },
}) => (
  <div className="App">
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age && (
        <p className="Person__age">
          <span>{`I am ${age}`}</span>
        </p>
      )}
      <p className="Person__partner">
        {isMarried === true && sex === 'm'
          ? <span>{`${partnerName} is my wife`}</span>
          : null}

        {isMarried === true && sex === 'f'
          ? <span>{`${partnerName} is my husband`}</span>
          : null}

        {isMarried === false
          ? <span>I am not married</span>
          : null}
      </p>
    </section>
  </div>
);
