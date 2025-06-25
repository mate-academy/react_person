export const Person = ({ person }) => {
  const partnerType = person.sex === 'm' ? 'wife' : 'husband';
  const personPartner = person.isMarried
    ? `${person.partnerName} is my ${partnerType}`
    : 'I am not married';

  return (
    <div>
      <h2 className="Person__name">{`My name is ${person.name}`}</h2>

      {person.age && <p className="Person__age">{`My age is ${person.age}`}</p>}

      <p className="Person__partner">{personPartner}</p>
    </div>
  );
};
