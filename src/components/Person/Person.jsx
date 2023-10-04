export const Person = ({ person }) => {
  const { name, age, isMarried, partnerName, sex } = person;

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>
      {age ? <p className="Person__age">{`I am ${age}`}</p> : null}

      <p className="Person__partner">
        {!isMarried
          ? 'I am not married'
          : `${partnerName} is my ${sex === 'f' ? 'husband' : 'wife'}`}
      </p>
    </section>
  );
};
