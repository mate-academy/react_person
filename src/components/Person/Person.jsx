export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  const renderPartner = () => {
    if (!isMarried) {
      return 'I am not married';
    }

    const partnerTitle = sex === 'm' ? 'wife' : 'husband';

    return `${partnerName} is my ${partnerTitle}`;
  };

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>

      {age !== undefined && <p className="Person__age">I am {age}</p>}

      <p className="Person__partner">{renderPartner()}</p>
    </section>
  );
};
