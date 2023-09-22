export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  const getPartnerLabel = () => {
    let marriedLabel;

    if (isMarried) {
      marriedLabel = sex === 'm'
        ? `${partnerName} is my wife`
        : `${partnerName} is my husband`;
    }

    return isMarried === true
      ? marriedLabel
      : 'I am not married';
  };

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>

      {age !== undefined
      && <p className="Person__age">{`I am ${age}`}</p>}

      <p className="Person__partner">{getPartnerLabel()}</p>
    </section>
  );
};
