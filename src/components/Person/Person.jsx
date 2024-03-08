export const Person = ({ person }) => {
  const { age, name, sex, partnerName, isMarried } = person;
  const partner = sex === 'm' ? 'wife' : 'husband';
  const married = isMarried
    ? `${partnerName} is my ${partner}`
    : 'i am not married';

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {age && <p className="Person__age">I am {age}</p>}
      <p className="Person__partner">{married}</p>
    </section>
  );
};
