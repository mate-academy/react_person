export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  const isMarriedMan = isMarried && sex === 'm';
  const isMarriedWoman = isMarried && sex === 'f';

  return (
    <div className="Person">
      <h2 className="Person__name">My name is {name}</h2>

      {age && <p className="Person__age">I am {age}</p>}

      {!isMarried && <p className="Person__partner">I am not married</p>}

      {isMarriedMan && (
        <p className="Person__partner">{partnerName} is my wife</p>
      )}

      {isMarriedWoman && (
        <p className="Person__partner">{partnerName} is my husband</p>
      )}
    </div>
  );
};
