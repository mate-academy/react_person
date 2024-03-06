export const Person = ({ person }) => {
  const { isMarried, sex, age, partnerName, name } = person;

  const textSex = sex === 'm' ? 'is my wife' : 'is my husband';

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {age && <p className="Person__age">I am {age}</p>}
      {!isMarried && <p className="Person__partner">I am not married</p>}

      {isMarried && (
        <p className="Person__partner">
          {partnerName} {textSex}
        </p>
      )}
    </section>
  );
};
