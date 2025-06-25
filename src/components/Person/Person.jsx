export const Person = ({ person }) => {
  const { name, age, isMarried, sex, partnerName } = person;

  const getPartnerText = () => {
    if (isMarried) {
      const partnerType = sex === 'm' ? 'wife' : 'husband';

      return `${partnerName} is my ${partnerType}`;
    }

    return 'I am not married';
  };

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {age && <p className="Person__age">I am {age}</p>}
      <p className="Person__partner">{getPartnerText()}</p>
    </section>
  );
};
