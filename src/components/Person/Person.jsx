export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;
  const marriageStatus = sex === 'f' ? 'husband' : 'wife';

  return (
    <section className="Person">

      <h2 className="Person__name">{`My name is ${name}`}</h2>

      {age && (<p className="Person__age">{`I am ${age}`}</p>)}

      <p className="Person__partner">

        {isMarried
          ? `${partnerName} is my ${marriageStatus}`
          : `I am not married`}

      </p>

    </section>
  );
};
