import './Person.scss';

export const Person = ({ person }) => {
  const { name, age, isMarried, sex, partnerName } = person;
  const partnersGender = sex === 'm' ? 'wife' : 'husband';
  const message = isMarried
    ? `${partnerName} is my ${partnersGender}`
    : 'I am not married';

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {age && <p className="Person__age">I am {age}</p>}
      <p className="Person__partner">{message}</p>
    </section>
  );
};
