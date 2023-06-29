export const Person = ({ person }) => {
  const { name, age, isMarried, partnerName, sex } = person;
  const partner = sex === 'f'
    ? 'husband'
    : 'wife';

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>

      {age
        && (<p className="Person__age">{`I am ${age}`}</p>)}

      <p className="Person__partner">
        {!isMarried
          ? 'Im not married'
          : `${partnerName} is my ${partner}`}
      </p>
    </section>
  );
};
