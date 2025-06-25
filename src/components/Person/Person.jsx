export const Person = ({ person }) => {
  const { name, sex, age, isMarried, partnerName } = person;
  let male = '';

  if (sex === 'm') {
    male = 'husband';
  } else {
    male = 'wife';
  }

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {age > 0 ? <p className="Person__age">I am {age}</p> : ''}
      {isMarried === true ? (
        <p className="Person__partner">
          {partnerName} is my {male}
        </p>
      ) : (
        <p className="Person__partner">I am not married</p>
      )}
    </section>
  );
};
