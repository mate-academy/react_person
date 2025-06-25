export const Person = ({ person }) => {
  const { name, age, isMarried, sex, partnerName } = person;
  const partnerSex = sex === 'f' ? `${partnerName} is my husband` : `${partnerName} is my wife`;

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>

      {age && (
        <p className="Person__age">
          {`I am ${age}`}
        </p>
      )
      }

      <p className="Person__partner">
        {!isMarried ? `I am not married` : partnerSex}
      </p>
    </section>
  );
};
