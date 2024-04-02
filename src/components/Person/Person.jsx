export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;
  const personPartner = sex === 'm' ? `wife` : `husband`;
  const personMarriedStatus = isMarried
    ? `${partnerName} is my ${personPartner}`
    : `I am not married`;

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>

      {age && <p className="Person__age">I am {age}</p>}

      <p className="Person__partner">{personMarriedStatus}</p>
    </section>
  );
};
