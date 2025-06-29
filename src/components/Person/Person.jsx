export const Person = ({ person }) => {
  const { name, sex, isMarried } = person;
  const age = person.age ? (
    <p className="Person__age">I am {person.age}</p>
  ) : null;
  let status = '';

  if (isMarried === true) {
    status =
      sex === 'm'
        ? `${person.partnerName} is my wife`
        : `${person.partnerName} is my husband`;
  } else {
    status = 'I am not married';
  }

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {age}
      <p className="Person__partner">{status}</p>
    </section>
  );
};
