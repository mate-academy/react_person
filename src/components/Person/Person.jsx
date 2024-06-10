export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;
  const partner = sex === 'm' ? 'wife' : 'husband';

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>

      {person.age && (
        <p className="Person__age">
          <p>{`I am ${age}`}</p>
        </p>
      )}

      <p className="Person__partner">
        {isMarried === false
          ? 'I am not married'
          : `${partnerName} is my ${partner}`}
      </p>
    </section>
  );
};
