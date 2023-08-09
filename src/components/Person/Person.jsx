export const Person = ({ person: {
  name,
  age,
  sex,
  isMarried,
  partnerName,
} }) => {
  const isFemale = sex === 'f';
  let partnerStatus = 'I am not married';

  if (isMarried) {
    partnerStatus = isFemale
      ? `${partnerName} is my husband`
      : `${partnerName} is my wife`;
  }

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>

      {age !== undefined && (
        <p className="Person__age">{`I am ${age}`}</p>
      )}

      <p className="Person__partner">{partnerStatus}</p>
    </section>
  );
};
