import './Person.scss';

export const Person = ({ person }) => {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = person;

  const partnerRole = sex === 'm'
    ? 'wife'
    : 'husband';

  const marriageStatusInfo = isMarried
    ? `${partnerName} is my ${partnerRole}`
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
