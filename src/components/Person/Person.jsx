export const Person = ({ person }) => {
  const { name, age, isMarried, sex, partnerName } = person;
  const partnerLabel = sex === 'm' ? 'wife' : 'husband';
  const displayPartner = partnerName || 'unknown';

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {age && <p className="Person__age">I am {age}</p>}
      {isMarried ? (
        <p className="Person__partner">
          {displayPartner} is my {partnerLabel}
        </p>
      ) : (
        <p className="Person__partner">I am not married</p>
      )}
    </section>
  );
};
