export const Person = ({
  person: { name, age = 0, sex, isMarried, partnerName },
}) => (
  <section className="Person">
    <h2 className="Person__name">My name is {name} </h2>
    {age ? <p className="Person__age">I am {age}</p> : null}
    {isMarried === false
      ? 'I am not married'
      : `${partnerName} is my ${sex === 'm' ? 'wife' : 'husband'}`}
  </section>
);
