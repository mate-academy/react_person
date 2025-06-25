const getStatus = person => {
  const { sex, isMarried, partnerName } = person;

  if (isMarried) {
    return `${partnerName} is my ${sex === 'f' ? 'husband' : 'wife'}`;
  }

  return 'I am not married';
};

export const Person = ({ person = {} }) => {
  const status = getStatus(person);
  const { name, age } = person;

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {age && <p className="Person__age">I am {age}</p>}
      <p className="Person__partner">{status}</p>
    </section>
  );
};
