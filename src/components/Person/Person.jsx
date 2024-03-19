export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;
  let partnerSex;

  if (sex === 'm') {
    partnerSex = 'wife';
  } else {
    partnerSex = 'husband';
  }

  let partnerInfo;

  if (isMarried) {
    partnerInfo = (
      <p className="Person__partner">
        {partnerName} is my {partnerSex}
      </p>
    );
  } else {
    partnerInfo = <p className="Person__partner">I am not married</p>;
  }

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {age && <p className="Person__age">I am {age}</p>}
      {partnerInfo}
    </section>
  );
};
