export const Person = ({ person }) => {
  const { name, age } = person;
  const getPartnerMessage = partner => {
    const { isMarried, partnerName, sex } = partner;

    if (!isMarried) {
      return 'I am not married';
    }

    return sex === 'f'
      ? `${partnerName} is my husband`
      : `${partnerName} is my wife`;
  };

  return (
    <div className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {age && <p className="Person__age">I am {age}</p>}
      <p className="Person__partner">{getPartnerMessage(person)}</p>
    </div>
  );
};
