import './Person.css';

export function Person({ person }) {
  const { name, age, sex, isMarried, partnerName } = person;
  const isMan = sex === 'm';

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>

      {
        age
          ? (
            <p className="Person__age">
              {age && `I am ${age}`}
            </p>
          )
          : null
      }

      <p className="Person__partner">
        {
          isMarried
            ? `${partnerName} is my ${isMan ? 'wife' : 'husband'}`
            : 'I am not married'
        }
      </p>
    </section>
  );
}
