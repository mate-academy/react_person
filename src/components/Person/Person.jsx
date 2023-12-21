const man = 'm';
const woman = 'f';

export const Person = ({
  person: { name, age, sex, partnerName, isMarried },
}) => (
  <div className="App">
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>

      {age && (<p className="Person__age">{`I am ${age}`}</p>)}

      <p className="Person__partner">
        {isMarried && sex === man
          ? <span>{`${partnerName} is my wife`}</span>
          : null}

        {isMarried && sex === woman
          ? <span>{`${partnerName} is my husband`}</span>
          : null}

        {!isMarried
          ? 'I am not married'
          : null}
      </p>
    </section>
  </div>
);
