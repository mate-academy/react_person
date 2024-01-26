export const Person = ({ person }) => {
  const { name, age, sex, partnerName, isMarried } = person;

  const getPartner = () => {
    if (isMarried) {
      if (sex === 'm') {
        return `${partnerName} is my wife`;
      }

      if (sex === 'f') {
        return `${partnerName} is my husband`;
      }
    }

    return 'I am not married';
  };

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>
      {age && (
        <p className="Person__age">
          {`I am ${age}`}
        </p>
      )}
      <p className="Person__partner">
        {getPartner()}
      </p>
    </section>
  );
};
