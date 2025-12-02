// const { name, age, sex, partner } = person;

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  const isMarriedWoman = isMarried && sex === 'f';
  const isMarriedMan = isMarried && sex === 'm';

  return (
    <div className="App">
      <section className="Person">
        <h2 className="Person__name">My name is {name}</h2>

        {age && <p className="Person__age">I am {age}</p>}

        {isMarriedWoman && (
          <p className="Person__partner">{partnerName} is my husband</p>
        )}

        {isMarriedMan && (
          <p className="Person__partner">{partnerName} is my wife</p>
        )}

        {!isMarried && <p className="Person__partner">I am not married</p>}
      </section>
    </div>
  );
};
