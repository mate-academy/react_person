const MALE = 'm';
const WIFE = 'wife';
const HUSBAND = 'husband';

export const Person = ({ person }) => {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = person;

  const statusPartner = sex === MALE
    ? WIFE
    : HUSBAND;

  const marriageStatusInfo = isMarried
    ? `${partnerName} is my ${statusPartner}`
    : 'I am not married';

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>

      {Boolean(age) && (
        <p className="Person__age">
          {`I am ${age}`}
        </p>
      )}

      <p className="Person__partner">
        {marriageStatusInfo}
      </p>
    </section>
  );
};
