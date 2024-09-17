export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  let marriageStatus = 'I am not married';

  if (isMarried) {
    marriageStatus = `${partnerName} is my ${sex === 'm' ? 'wife' : 'husband'}`;
  }

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {age && <p className="Person__age">{`I am ${age}`}</p>}
      <p className="Person__partner">{marriageStatus}</p>
    </section>
  );
};
