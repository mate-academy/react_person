export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age !== undefined && <p className="Person__age">{`I am ${age}`}</p>}
      <p className="Person__partner">
        {isMarried === false && `I am not married`}
        {isMarried && sex === 'm' && `${partnerName} is my wife`}
        {isMarried && sex === 'f' && `${partnerName} is my husband`}
      </p>
    </section>
  );
};
