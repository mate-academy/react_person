export const Person = ({ person }) => {
  const { name, sex, age, isMerried, partnerName } = person;
  const man = sex === 'm';
  const partnerStatus = man ? 'wife' : 'husband';

  return (
    <section className="Person">
      <h2 className="Person__name">My name is ${name}</h2>
      {age && <p className="Person__age">I am ${age}</p>}
      <p className="Person__partner">
        {isMerried
          ? `{partnerName} is my {partnerStatus}`
          : 'I am not married'}
      </p>
    </section>
  );
};
