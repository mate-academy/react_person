export const Person = (
  { person: { name, age, sex, isMarried, partnerName } },
) => {
  const partner = sex === 'm' ? 'wife' : 'husband';

  const getPartner = () => {
    if (isMarried) {
      return `${partnerName} is my ${partner}`;
    }

    return 'I am not married';
  };

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age && (
      <p className="Person__age">{`I am ${age}`}</p>
      )}
      <p className="Person__partner">{getPartner()}</p>
    </section>
  );
};
