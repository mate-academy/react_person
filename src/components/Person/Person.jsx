export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;
  const getPartnerText = () => {
    if (isMarried && sex === 'f') {
      return <p className="Person__partner">{partnerName} is my husband</p>;
    }

    if (isMarried && sex === 'm') {
      return <p className="Person__partner">{partnerName} is my wife</p>;
    }

    return <p className="Person__partner">I am not married</p>;
  };

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {
      age === undefined 
      ? null 
      : <p className="Person__age">I am {age}</p>
      }
      {getPartnerText()}
    </section>
  );
};
