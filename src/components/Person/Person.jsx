export const Person = ({ person }) => {
  const { name, sex, age, partnerName, isMarried } = person;

  const getMarriageStatus = married => {
    if (!married) {
      return 'I am not married';
    }

    const partner = sex === 'm' ? 'wife' : 'husband';

    return `${partnerName} is my ${partner}`;
  };

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age !== undefined && <p className="Person__age">{`I am ${age}`}</p>}
      <p className="Person__partner">{`${getMarriageStatus(isMarried)}`}</p>
    </section>
  );
};
