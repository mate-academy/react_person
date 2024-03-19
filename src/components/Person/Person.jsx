export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  const personPartnerType = sex === 'f' ? 'husband' : 'wife';

  const ageMessage = age && <p className="Person__age">I am {age}</p>;

  const marriedMessage = isMarried ? (
    <p className="Person__partner">
      {`${partnerName} is my ${personPartnerType}`}
    </p>
  ) : (
    <p className="Person__partner">I am not married</p>
  );

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {ageMessage}
      {marriedMessage}
    </section>
  );
};

export default Person;
