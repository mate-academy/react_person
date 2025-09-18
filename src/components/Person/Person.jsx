export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  const getPartnerText = () => {
    if (!isMarried) {
      return 'I am not married';
    }

    return sex === 'm'
      ? `${partnerName} is my wife`
      : `${partnerName} is my husband`;
  };

  return (
    <>
      <h2 className="Person__name"> {`My name is ${name}`} </h2>
      {age && <p className="Person__age"> {`I am ${age}`} </p>}

      <p className="Person__partner">{getPartnerText()}</p>
    </>
  );
};
// Natasha is my wife
// I am not married
// Maksym is my husband
