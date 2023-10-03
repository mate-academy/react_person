import './Person.scss';

export const Person = ({ person }) => {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = person;

  const showAge = age
    ? <p className="Person__age">{`I am ${age}`}</p>
    : null;

  const partnerSex = sex === 'm'
    ? 'wife'
    : 'husband';

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {showAge}
      <p className="Person__partner">
        {isMarried
          ? `${partnerName} is my ${partnerSex}`
          : 'I am not married'}
      </p>
    </section>
  );
};
