export const Person = ({ person }) => {
  const { isMarried, sex, age, partnerName, name } = person;

  const textSex = sex === 'm' ? 'is my wife' : 'is my husband';

  const text = isMarried ? `${partnerName} ${textSex}` : 'I am not married';

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {age && <p className="Person__age">I am {age}</p>}
      <p className="Person__partner">{text}</p>
    </section>
  );
};
