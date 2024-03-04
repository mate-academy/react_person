export const Person = ({
  person: { name, age, sex, isMarried, partnerName },
}) => {
  const partnerStatus = age && <p className="Person__age">I am {age}</p>;

  const partnerMassage = isMarried
    ? `${partnerName} is my ${sex === 'm' ? 'wife' : 'husband'}`
    : 'I am not married';

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {partnerStatus}
      <p className="Person__partner">{partnerMassage}</p>
    </section>
  );
};
