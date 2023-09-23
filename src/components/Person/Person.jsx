export const Person = ({ person }) => {
  const {
    name,
    sex,
    isMarried,
    partnerName,
    age,
  } = person;

  const partnerStatus = () => {
    if (isMarried) {
      return sex === 'm'
        ? `${partnerName} is my wife`
        : `${partnerName} is my husband`;
    }

    return 'I am not married';
  };

  return (
    <>
      <div className="Person">
        <h2 className="Person__name">{`My name is ${name}`}</h2>
        {age && <p className="Person__age">{`I am ${age}`}</p>}
        <p className="Person__partner">{partnerStatus()}</p>
      </div>
    </>
  );
};
