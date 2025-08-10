export const Person = ({ person }) => {
  const { name, age, partnerName, sex, isMarried } = person;

  const partnerMessage = isMarried
    ? `${partnerName} is my ${sex === 'm' ? 'wife' : 'husband'}`
    : 'I am not married';

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {age && <p className="Person__age">I am {age}</p>}
      <p className="Person__partner">{partnerMessage}</p>
    </section>
  );
};
