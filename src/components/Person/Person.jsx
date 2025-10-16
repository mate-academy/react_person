export const Person = ({ person }) => {
  const { name, age, isMarried, partnerName, sex } = person;

  const spouseLabel = sex === 'f'
  ? 'husband'
  : 'wife';

const partnerText = isMarried
  ? `${partnerName} is my ${spouseLabel}`
  : 'I am not married';

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>

      {age !== undefined && <p className="Person__age">I am {age}</p>}

      <p className="Person__partner">{partnerText}</p>
    </section>
  );
};
