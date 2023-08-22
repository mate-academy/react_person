import './Person.scss';

export const Person = ({ person }) => {
  const {
    name,
    age,
    gender,
    isMarried,
    partnerName,
  } = person;

  const partnerRole = (gender === 'm')
    ? 'wife'
    : 'husband';

  const partnerDescription = isMarried
    ? `${partnerName} is my ${partnerRole}`
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
        {partnerDescription}
      </p>
    </section>
  );
};
