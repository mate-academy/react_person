export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;
  const gender = sex === 'm' ? 'male' : 'female';

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {age && <p className="Person__age">I am {age}</p>}
      {isMarried ? (
        <p className="Person__partner">
          {partnerName} is my {gender === 'male' ? 'wife' : 'husband'}
        </p>
      ) : (
        <p className="Person__partner">I am not married</p>
      )}
    </section>
  );
};
