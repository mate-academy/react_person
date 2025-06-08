export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;
  let checkStatus;

  if (!isMarried) {
    checkStatus = <p className="Person__partner">I am not married</p>;
  } else if (sex === 'm') {
    checkStatus = <p className="Person__partner">{partnerName} is my wife</p>;
  } else if (sex === 'f') {
    checkStatus = (
      <p className="Person__partner">{partnerName} is my husband</p>
    );
  }

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {age !== undefined && <p className="Person__age">I am {age}</p>}
      {checkStatus}
    </section>
  );
};
