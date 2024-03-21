// export const Person = ({ person }) => ()
export const Person = ({ person }) => {
  const { name, isMarried, age, sex, partnerName } = person;

  const personSex =
    sex === 'm' ? `${partnerName} is my wife` : `${partnerName} is my husband`;

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {age && <p className="Person__age">I am {age}</p>}

      <p className="Person__partner">
        {isMarried === false ? `I am not married` : personSex}
      </p>
    </section>
  );
};
