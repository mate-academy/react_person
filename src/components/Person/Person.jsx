export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  const getPartnerMessage = () => {
    if (!isMarried) {
      return 'I am not married';
    }

    const partnerType = sex === 'm' ? 'wife' : 'husband';

    return `${partnerName} is my ${partnerType}`;
  };

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {age && <p className="Person__age">I am {age}</p>}
      <p className="Person__partner">{getPartnerMessage()}</p>
    </section>
  );
};
