export const Person = ({ person }) => {
  const { name, age, isMarried, partnerName, sex } = person;
  const marriedMessage = `${partnerName} is my ${sex === 'm' ? 'wife' : 'husband'}`;
  const notMarriedMessage = 'I am not married';

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age !== undefined
      && <p className="Person__age">{`I am ${age}`}</p>}
      <p className="Person__partner">
        {isMarried
          ? marriedMessage
          : notMarriedMessage}
      </p>
    </section>
  );
};
