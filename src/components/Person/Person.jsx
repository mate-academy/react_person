export const Person = ({ name, age, sex, isMarried, partnerName }) => {
  const showPartner = isMarried && partnerName;
  const partnerLabel = sex === 'm' ? 'wife' : 'husband';

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>

      {age && <p className="Person__age">{`I am ${age}`}</p>}

      {showPartner && (
        <p className="Person__partner">
          {partnerName} is my {partnerLabel}
        </p>
      )}

      {isMarried === false && (
        <p className="Person__partner">I am not married</p>
      )}
    </section>
  );
};
