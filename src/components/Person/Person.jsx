export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;
  const isManOrWoman = sex === 'm'
    ? <p className="Person__partner">{`${partnerName} is my wife`}</p>
    : <p className="Person__partner">{`${partnerName} is my husband`}</p>;

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age
        && <p className="Person__age">{`I am ${age}`}</p>
      }
      {isMarried
        ? isManOrWoman
        : <p className="Person__partner">I am not married</p>

      }
    </section>
  );
};
