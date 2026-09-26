export const Person = ({ person }) => {
  const { name, age = 0, sex, isMarried, partnerName = '' } = person;

  function getPartnerContent() {
    if (!isMarried) {
      return 'I am not married';
    }

    return sex === 'm'
      ? `${partnerName} is my wife`
      : `${partnerName} is my husband`;
  }

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>

      {age > 0 && <p className="Person__age">I am {age}</p>}

      <p className="Person__partner">{getPartnerContent()}</p>
    </section>
  );
};
