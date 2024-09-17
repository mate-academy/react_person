export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;
  const sexOfPartner = sex === 'm' ? 'wife' : 'husband';
  const isMariedText = isMarried
    ? `${partnerName} is my ${sexOfPartner}`
    : `I am not married`;

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>

      {age ? <p className="Person__age">I am {age}</p> : null}

      <p className="Person__partner">{isMariedText}</p>
    </section>
  );
};
