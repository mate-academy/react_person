export const Person = ({ person }) => {
  const { name: personName, age, sex, isMarried, partnerName } = person;
  const partnerStatus = `${partnerName} is my ${sex === 'm' ? 'wife' : 'husband'}`;
  const relationStatus = isMarried ? partnerStatus : 'I am not married';

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {personName}</h2>

      {age && <p className="Person__age">I am {age}</p>}

      <p className="Person__partner">{relationStatus}</p>
    </section>
  );
};
