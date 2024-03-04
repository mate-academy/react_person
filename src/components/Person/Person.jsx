export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;
  const getPartnerStatus = () => {
    if (isMarried) {
      return `${partnerName} is my ${sex === 'm' ? 'wife' : 'husband'}`;
    }

    return 'I am not married';
  };

  return (
    <div>
      <section className="Person">
        <h2 className="Person__name">My name is {name}</h2>
        {age && <p className="Person__age">I am {age}</p>}
        <p className="Person__partner">{getPartnerStatus()}</p>
      </section>
    </div>
  );
};
