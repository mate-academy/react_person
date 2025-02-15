export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;
  const getMarriageStatus = () => {
    if (!isMarried) {
      return 'I am not married';
    }

    const partner = sex === 'm' ? 'wife' : 'husband';

    return `${partnerName} is my ${partner}`;
  };

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age && <p className="Person__age">{`I am ${age}`}</p>}
      <p className="Person__partner">{getMarriageStatus()}</p>
    </section>
  );
};
