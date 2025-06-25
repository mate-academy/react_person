export const Person = ({ name, age, isMarried, partnerName, sex }) => (
  <section className="Person">
    <h2 className="Person__name">My name is {name}</h2>
    {age !== undefined ? <p className="Person__age">I am {age}</p> : null}
    {isMarried ? (
      <p className="Person__partner">
        {partnerName} is my {sex === 'm' ? 'wife' : 'husband'}
      </p>
    ) : (
      <p className="Person__partner">I am not married</p>
    )}
  </section>
);
