export const Person = ({ name, age, sex, isMarried, partnerName }) => (
  <section className="Person">
    <h2 className="Person__name">My name is {name}</h2>

    {age && <p className="Person__age">{`I am ${age}`}</p>}

    {partnerName && sex === 'm' && (
      <p className="Person__partner">{`${partnerName} is my wife`}</p>
    )}

    {partnerName && sex === 'f' && (
      <p className="Person__partner">{`${partnerName} is my husband`}</p>
    )}

    {isMarried === false && <p className="Person__partner">I am not married</p>}
  </section>
);
