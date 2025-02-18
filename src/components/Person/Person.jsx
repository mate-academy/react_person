export const Person = ({
  person: { name, age, sex, isMarried, partnerName },
}) => (
  <section className="Person">
    <h2 className="Person__name">My name is {name}</h2>
    {age != null && <p className="Person__age">I am {age}</p>}
    {isMarried === true ? (
      <p className="Person__partner">
        {sex === 'm'
          ? `${partnerName} is my wife`
          : `${partnerName} is my husband`}
      </p>
    ) : (
      <p className="Person__partner">I am not married</p>
    )}
  </section>
);
