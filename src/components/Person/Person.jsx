export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  const nameInfo = name && `My name is ${name}`;
  const ageInfo = age && `I am ${age}`;
  const partnerInfo = isMarried
    ? `${partnerName} is my ${sex === 'm' ? 'wife' : 'husband'}`
    : 'I am not married';

  return (
    <section className="Person">
      <h2 className="Person__name">{nameInfo}</h2>

      {age && <p className="Person__age">{ageInfo}</p>}

      <p className="Person__partner">{partnerInfo}</p>
    </section>
  );
};
