export const Person = ({ name, age, partnerName, isMarried, sex }) => {
  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age !== undefined && <p className="Person__age">{`I am ${age}`}</p>}
      {!isMarried && partnerName && (
        <p className="Person__partner">I am not married</p>
      )}
      {isMarried &&
        (sex === 'm' ? (
          <p className="Person__partner">{`${partnerName} is my wife`}</p>
        ) : (
          <p className="Person__partner">{`${partnerName} is my husband`}</p>
        ))}
    </section>
  );
};
