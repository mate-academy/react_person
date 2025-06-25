export const Person = ({ person }) => {
  const { name, age, isMarried, partnerName, sex } = person;

  const partnerTranslation = sex === 'm' ? 'wife' : 'husband';

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>

      {age && <p className="Person__age">I am {age}</p>}

      {isMarried && partnerName ? (
        <p className="Person__partner">
          {partnerName} is my {partnerTranslation}
        </p>
      ) : (
        <p className="Person__partner">I am not married</p>
      )}
    </section>
  );
};
