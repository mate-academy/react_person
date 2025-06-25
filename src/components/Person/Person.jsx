export const Person = ({ person }) => {
  const status = person.isMarried
    ? `${person.partnerName} is my ${person.sex === 'm' ? 'wife' : 'husband'}`
    : 'I am not married';

  return (
    <>
      <h2 className="Person__name">My name is {person.name}</h2>
      {person.age && <p className="Person__age">I am {person.age}</p>}
      <p className="Person__partner">{status}</p>
    </>
  );
};

export default Person;
