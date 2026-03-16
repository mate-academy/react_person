export const Person = ({
  person: { name, age, isMarried, sex, partnerName },
}) => (
  <section className="Person">
    <h2 className="Person__name">My name is {name}</h2>
    {age && <p className="Person__age">I am {age}</p>}
    {isMarried ? (
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
