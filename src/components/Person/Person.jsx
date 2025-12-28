const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;
  const getPartnerText = () => {
    if (!isMarried) {
      return 'I am not married';
    }

    // eslint-disable-next-line prettier/prettier
    const relationship = sex === 'm'
      ? 'wife'
      : 'husband';

    return `${partnerName} is my ${relationship}`;
  };

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {age && <p className="Person__age">I am {age}</p>}
      <p className="Person__partner">{getPartnerText()}</p>
    </section>
  );
};

export default Person;
