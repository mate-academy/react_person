export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  let partnerInfo;

  if (isMarried) {
    let partnerType;

    if (sex === 'm') {
      partnerType = 'wife';
    } else if (sex === 'f') {
      partnerType = 'husband';
    }

    partnerInfo = (
      <p className="Person__partner">
        {`${partnerName} is my ${partnerType}`}
      </p>
    );
  } else {
    partnerInfo = <p className="Person__partner">I am not married</p>;
  }

  const ageDisplay = age ? (
    <p className="Person__age">I am {age}</p>
  ) : null;

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {ageDisplay}
      {partnerInfo}
    </section>
  );
};
