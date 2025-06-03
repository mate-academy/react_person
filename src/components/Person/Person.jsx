export const Person = ({ name, age, sex, partnerName }) => (
  <section className="Person">
    <h2 className="Person__name">My name is {name}</h2>
    <p className="Person__age"> I am {age || 'unknown age'} </p>

    {partnerName ? (
      <p className="Person__partner">
        {partnerName} is my {sex === 'f' ? 'husband' : 'wife'}
      </p>
    ) : (
      <p className="Person__partner">I am not married</p>
    )}
  </section>
);
