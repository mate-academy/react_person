export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  const partnerLabel = sex === 'm' ? 'wife' : 'husband';

  const partnerText = isMarried
    ? `${partnerName} is my ${partnerLabel}`
    : 'I am not married';

  const ageElement =
    age !== undefined ? <span className="Person__age">{age}</span> : null;

  return (
    <div className="Person">
      <h2 className="Person__name">{name}</h2>
      {ageElement}
      <p className="Person__partner">{partnerText}</p>
    </div>
  );
};
