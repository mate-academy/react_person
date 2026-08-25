export const Person = ({ person }) => {
  const { name, age, isMarried, sex, partnerName } = person;

  const isNotMarried = !isMarried;
  const partnerType = sex === 'm' ? 'wife' : 'husband';

  const partnerInfo = isNotMarried
    ? 'I am not married'
    : `${partnerName} is my ${partnerType}`;

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>

      {age !== undefined && <p className="Person__age">{`I am ${age}`}</p>}

      <p className="Person__partner">{partnerInfo}</p>
    </section>
  );
};
