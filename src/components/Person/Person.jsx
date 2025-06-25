export const Person = ({
  person: { sex, name, age, isMarried, partnerName },
}) => {
  const partner = sex === 'm' ? 'wife' : 'husband';

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>

      {age && <p className="Person__age">{`I am ${age}`}</p>}

      {isMarried === true ? (
        <p className="Person__partner">{`${partnerName} is my ${partner}`}</p>
      ) : (
        <p className="Person__partner">I am not married</p>
      )}
    </section>
  );
};
