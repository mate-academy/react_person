import './Person.scss';

const PARTNER_VARIANTS = {
  f: 'husband',
  m: 'wife',
};

export const Person = ({
  person: { name, age, sex, isMarried, partnerName },
}) => {
  const personName = `My name is ${name}`;
  const personAge = age ? `I am ${age}` : null;
  const marriageTitle = isMarried
    ? `${partnerName} is my ${PARTNER_VARIANTS[sex]}`
    : 'I am not married';

  return (
    <section className="Person">
      <h2 className="Person__name">{personName}</h2>

      {personAge && <p className="Person__age">{personAge}</p>}

      <p className="Person__partner">{marriageTitle}</p>
    </section>
  );
};
