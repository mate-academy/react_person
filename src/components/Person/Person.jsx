export const Person = ({ person }) => {
  const { name, age, isMarried, partnerName, sex } = person;
  let partnerInfo;
  if (isMarried) {
    partnerInfo = (
      <p className="Person__partner">
        {sex === 'f'
          ? `${partnerName} is my husband`
          : `${partnerName} is my wife`}
      </p>
    );
  } else {
    partnerInfo = <p className="Person__partner">I am not married</p>;
  }
  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age && <p className="Person__age">I am {age}</p>}
      {partnerInfo}
    </section>
  );
};
