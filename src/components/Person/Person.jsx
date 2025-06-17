// export const Person = ({ person }) => ();
export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  const getPartnerText = () => {
    if (!isMarried) return 'not married';
    const partnerRole = sex === 'm' ? 'wife' : 'husband';

    return `${partnerName} is my ${partnerRole}`;
  };

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {age && <p className="Person__age">I am {age}</p>}
      <p className="Person__partner">{getPartnerText()}</p>
    </section>
  );
};
