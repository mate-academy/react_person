import './Person.scss';

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;
  const spouse = sex === 'm' ? 'wife' : 'husband';

  return (
    <div className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>

      {age && <p className="Person__age">{`I am ${age}`}</p>}

      {isMarried ? (
        <p className="Person__partner">{`${partnerName} is my ${spouse}`}</p>
      ) : (
        <p className="Person__partner">I am not married</p>
      )}
    </div>
  );
};
