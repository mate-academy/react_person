const MALE = 'm';
const FEMALE = 'f';

const PARTNER_ROLE = {
  [MALE]: 'husband',
  [FEMALE]: 'wife',
};

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;
  const partnerRole = sex === MALE ? PARTNER_ROLE[FEMALE] : PARTNER_ROLE[MALE];
  const maritalStatus = isMarried
    ? `${partnerName} is my ${partnerRole}`
    : 'I am not married';

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age && <p className="Person__age">{`I am ${age}`}</p>}
      <p className="Person__partner">{maritalStatus}</p>
    </section>
  );
};
