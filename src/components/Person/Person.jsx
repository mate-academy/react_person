export const Person = ({ person }) => {
  const { name, sex, isMarried, partnerName, age } = person;
  let status = 'I am not married';

  if (isMarried) {
    status = `${partnerName} is my ${sex === 'f' ? 'husband' : 'wife'}`;
  }

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {age && <p className="Person__age">I am {age}</p>}
      <p className="Person__partner">{status}</p>
    </section>
  );
};
