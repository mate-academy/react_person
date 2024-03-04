import './Person.scss';

export const Person = ({ person }) => {
  const { name, isMarried, sex, age, partnerName } = person;
  const spouse = sex === 'f' ? 'husband' : 'wife';
  const partnerMessage = isMarried
    ? `${partnerName} is my ${spouse}`
    : 'I am not married';

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {age && <p className="Person__age">I am {age}</p>}
      <p className="Person__partner">{partnerMessage}</p>
    </section>
  );
};
