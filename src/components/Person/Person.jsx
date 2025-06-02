export const Person = ({ name, age, sex, partnerName }) => (
  <section className="Person">
    <h2 className="Person__name">My name is {name}</h2>
    {age && <p className="Person__age">{`I am ${age}`}</p>}

    {partnerName ? (
      <p className="Person__partner">
        {partnerName} is my {sex === 'm' ? 'wife' : 'husband'}
      </p>
    ) : (
      <p className="Person__partner">I am not married</p>
    )}
  </section>
);

// - If a man is married, refer to his partner as `wife`; if a woman is married, refer to her partner as `husband`;
