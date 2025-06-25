import './Person.scss';

export const Person = ({ person }) => {
  const SEX_MALE = 'm';

  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = person;

  const partnerType = sex === SEX_MALE
    ? 'wife'
    : 'husband';

  const partnerText = isMarried
    ? `${partnerName} is my ${partnerType}`
    : 'I am not married';

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>

      {Boolean(age) && (
        <p className="Person__age">
          {`I am ${age}`}
        </p>
      )}

      <p className="Person__partner">{partnerText}</p>
    </section>
  );
};
