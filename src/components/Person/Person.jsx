import './Person.css';

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;
  const partnerTitle = sex === 'f' ? 'husband' : 'wife';

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age !== undefined
        ? (
          <p className="Person__age">I am {age}</p>
        )
        : (
          ''
        )
      }
      {isMarried === true ? (
        <p className="Person__partner">
          {`${partnerName} is my `}
          {partnerTitle}
        </p>
      ) : (
        <p className="Person__partner">I am not married</p>
      )}
    </section>
  );
};

export default Person;
