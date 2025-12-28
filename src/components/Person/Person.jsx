import './Person.scss';

export const Person = ({ person }) => {
  const { age, name, isMarried, partnerName, sex } = person;

  const hasAge = age !== undefined;

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>

      {hasAge ? <p className="Person__age">I am {age}</p> : null}

      {isMarried ? (
        <p className="Person__partner">
          {partnerName} is my{' '}
          {sex === 'm' ? <span>wife</span> : <span>husband</span>}
        </p>
      ) : (
        <p className="Person__partner">I am not married</p>
      )}
    </section>
  );
};
