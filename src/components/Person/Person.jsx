export const Person = ({ person }) => {
  const partnerLabel = person.sex === 'm' ? 'wife' : 'husband';
  // i can`t create a ternary operator in 3 lines (NOT INLINE) because ESlint don`t do it!!!

  const partnerText = !person.isMarried
    ? 'I am not married'
    : `${person.partnerName} is my ${partnerLabel}`;

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${person.name}`}</h2>
      {Number.isFinite(person.age) && (
        <p className="Person__age">{`I am ${person.age}`}</p>
      )}
      <p className="Person__partner">{partnerText}</p>
    </section>
  );
};
