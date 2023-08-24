import './Person.scss';

export const Person = ({ person }) => {
  const MALE = 'm';

  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = person;

  const partnerStatus = sex === MALE
    ? 'wife'
    : 'husband';

  const marriageStatusInfo = isMarried
    ? `${partnerName} is my ${partnerStatus}`
    : 'I am not married';

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>

      {age && (
        <p className="Person__age">
          {`I am ${age}`}
        </p>
      )}

      <p className="Person__partner">
        { marriageStatusInfo }
      </p>
    </section>
  );
};
