export const Person = ({ person }) => {
  const { name, sex, isMarried, partnerName, age } = person;

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {age && <p className="Person__age">I am {age}</p>}
      <p className="Person__partner">
        {isMarried
          ? `${partnerName} ${sex === 'm' ? 'is my wife' : 'is my husband'}`
          : 'I am not married'}
      </p>
    </section>
  );
};
