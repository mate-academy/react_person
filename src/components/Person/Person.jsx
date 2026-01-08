export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  const partnerRole = sex === 'm' ? 'wife' : 'husband';

  const partnerText = !isMarried
    ? 'I am not married'
    : `${partnerName} is my ${partnerRole}`;

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>

      {age !== undefined && <p className="Person__age">{`I am ${age}`}</p>}

      <p className="Person__partner">{partnerText}</p>
    </section>
  );
};
