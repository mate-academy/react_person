import './Person.scss';

export const Person = ({ person }) => {
  const {
    name,
    sex,
    age,
    isMarried,
    partnerName,
  } = person;
  const isWoman = sex === 'f';
  const marriageStatus = isWoman
    ? `${partnerName} is my husband`
    : `${partnerName} is my wife`;

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>

      {age && <p className="Person__age">{`I am ${age}`}</p>}

      {!isMarried
        ? <p className="Person__partner">I am not married</p>
        : <p className="Person__partner">{marriageStatus}</p>
      }
    </section>
  );
};
