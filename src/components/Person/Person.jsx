export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  const MALE = 'm';
  const WIFE = 'wife';
  const HUSBAND = 'husband';

  let partnerInfo = 'I am not married';

  if (isMarried) {
    const partnerRole = sex === MALE ? WIFE : HUSBAND;

    partnerInfo = `${partnerName} is my ${partnerRole}`;
  }

  const hasAge = Boolean(age);

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>

      {hasAge && <p className="Person__age">{`I am ${age}`}</p>}

      <p className="Person__partner">{partnerInfo}</p>
    </section>
  );
};
