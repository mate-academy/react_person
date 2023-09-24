export function Person({ person }) {
  const {
    name,
    age,
    isMarried,
    sex,
    partnerName,
  } = person;
  const personStatus = sex === 'm' ? 'wife' : 'husband';

  return (
    <section className="Person">

      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>

      {person.age && (
        <p className="Person__age">
          {`I am ${age}`}
        </p>
      )}

      <p className="Person__partner">
        {!isMarried
          ? 'I am not married'
          : `${partnerName} is my ${personStatus}`
        }
      </p>
    </section>
  );
}
