export const Person = ({ person }) => {
  const { name,
    age,
    sex,
    isMarried,
    partnerName } = person;

  const maritalStatus = () => {
    let status = '';

    if (!isMarried) {
      status = 'I am not married';
    } else if (sex === 'f') {
      status = `${partnerName} is my husband`;
    } else {
      status = `${partnerName} is my wife`;
    }

    return status;
  };

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>
      { age && (
      <p className="Person__age">
        {`I am ${age}`}
      </p>
      )}
      <p className="Person__partner">
        {maritalStatus()}
      </p>
    </section>
  );
};
