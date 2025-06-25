const PARTNER_ROLE = {
  husband: 'husband',
  wife: 'wife',
};

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age && <p className="Person__age">{`I am ${age}`}</p>}
      <p className="Person__partner">
        {isMarried
          ? `${partnerName} is my ${sex === 'f' ? PARTNER_ROLE.husband : PARTNER_ROLE.wife}`
          : 'I am not married'}
      </p>
    </section>
  );
};
