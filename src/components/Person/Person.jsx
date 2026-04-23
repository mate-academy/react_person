export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  const getPartnerText = () => {
    if (!isMarried) {
      return 'I am not married';
    }

    if (sex === 'm') {
      return `${partnerName} is my wife`;
    }

    return `${partnerName} is my husband`;
  };

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {age !== undefined && <p className="Person__age">I am {age}</p>}
      <p className="Person__partner">{getPartnerText()}</p>
    </section>
  );
};
