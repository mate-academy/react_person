export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  const personMessage = !isMarried
    ? 'I am not married'
    : sex === 'm'
      ? `${partnerName} is my wife`
      : `${partnerName} is my husband`;

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {age !== undefined && (
        <p className="Person__age">I am {age}</p>
      )}
      <p className="Person__partner">{personMessage}</p>
    </section>
  );
};
