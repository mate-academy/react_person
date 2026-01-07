import './Person.scss';

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;
  const isFemaleMarried = isMarried && sex === 'f';
  const isMaleMarried = isMarried && sex === 'm';

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>

      {age !== undefined && <p className="Person__age">{`I am ${age}`}</p>}

      {!isMarried && <p className="Person__partner">I am not married</p>}

      {isFemaleMarried && (
        <p className="Person__partner">{`${partnerName} is my husband`}</p>
      )}

      {isMaleMarried && (
        <p className="Person__partner">{`${partnerName} is my wife`}</p>
      )}
    </section>
  );
};
