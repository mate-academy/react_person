export const Person = ({ person }) => {
  const partner = person.sex === 'm' ? 'wife' : 'husband';
  const status = person.isMarried ? `${person.partnerName} is my ${partner}` : 'I am not married';

  return (
    <>
      <h2 className="Person__name">{`My name is ${person.name}`}</h2>
      {person.age && <p className="Person__age">{`I am ${person.age}`}</p>}
      <p className="Person__partner">{status}</p>
    </>
  );
};
