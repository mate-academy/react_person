export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;
  const partnerRole = sex === 'm'
    ? 'wife'
    : 'husband';
  const partnerText = isMarried
    ? `${partnerName} is my ${partnerRole}`
    : null;

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>

      {age !== undefined && <p className="Person__age">{`I am ${age}`}</p>}

      <p className="Person__partner">
        {isMarried
          ? partnerText
          : 'I am not married'}
      </p>
    </section>
  );
};
