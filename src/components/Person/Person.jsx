const PARTNER_ROLES = {
  m: 'wife',
  f: 'husband',
};

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;
  const hasAge = age !== undefined;
  const partnerText = isMarried
    ? `${partnerName} is my ${PARTNER_ROLES[sex]}`
    : 'I am not married';

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {hasAge && <p className="Person__age">{`I am ${age}`}</p>}
      <p className="Person__partner">{partnerText}</p>
    </section>
  );
};
