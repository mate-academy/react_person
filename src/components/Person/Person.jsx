import './Person.scss';

export const Person = ({ person }) => {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = person;

  const SEX_MALE = 'm';
  const isWifeOrHusband = sex === SEX_MALE
    ? `${partnerName} is my wife`
    : `${partnerName} is my husband`;

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>
      {age && <p className="Person__age">{age && `I am ${age}`}</p>}
      <p className="Person__partner">
        {isMarried
          ? isWifeOrHusband
          : `I am not married`
        }
      </p>
    </section>
  );
};
