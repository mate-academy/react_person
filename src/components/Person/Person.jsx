export const Person = ({ person }) => {
  const partnerSex = person.sex === 'm'
    ? 'wife'
    : 'husband';
  const partnerText = person.isMarried
    ? `${person.partnerName} is my ${partnerSex}`
    : 'I am not married';
  const ageText = person.age
    ? `I am ${person.age}`
    : '';
  const shouldShowAge = Boolean(ageText)


  return (
    <div className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>
      {shouldShowAge && (
        <p className="Person__age">{ageText}</p>
      )}
      <p className="Person__partner">{partnerText}</p>
    </div>
  );
};
