import './Person.scss';

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;
  const showAge = age != null;
  // prettier-ignore
  const partnerRole = sex === 'm'
    ? 'wife'
    : 'husband';

  const hasPartner = isMarried === true && Boolean(partnerName);

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>

      {showAge && <p className="Person__age">{`I am ${age}`}</p>}

      <p className="Person__partner">
        {hasPartner
          ? `${partnerName} is my ${partnerRole}`
          : 'I am not married'}
      </p>
    </section>
  );
};
