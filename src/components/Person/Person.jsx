export const Person = (props) => {
  const {
    name,
    age,
    isMarried,
    partnerName,
    sex,
  } = props.person;

  const definePartner = `${partnerName} is my ${sex === 'f' ? 'husband' : 'wife'}`;

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>

      {age && <p className="Person__age">{`I am ${age}`}</p>}

      <p className="Person__partner">
        {!isMarried ? 'I am not married' : definePartner}
      </p>
    </section>
  );
};
