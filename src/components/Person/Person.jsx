export const Person = ({ person }) => {
  const getPartnerText = () => {
    if (!person.isMarried) return 'I am not married';

    return person.sex === 'm'
      ? `${person.partnerName} is my wife`
      : `${person.partnerName} is my husband`;
  };

  return (
    <div className="Person">
      <p className="Person__name">My name is {person.name}</p>

      {person.age && <p className="Person__age">I am {person.age}</p>}

      <p className="Person__partner">{getPartnerText()}</p>
    </div>
  );
};
