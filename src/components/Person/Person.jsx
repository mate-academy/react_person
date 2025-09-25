export const Person = ({
  person: { name, age = null, sex, isMarried, partnerName },
}) => {
  const partnerLabel = (
    sex === 'f'
      ? 'husband'
      : 'wife'
  );

  const partnerText = isMarried
    ? `${partnerName} is my ${partnerLabel}`
    : 'I am not married';

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>

      {age != null && <p className="Person__age">{`I am ${age}`}</p>}

      <p className="Person__partner">{partnerText}</p>
    </section>
  );
};
