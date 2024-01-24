export const Person = ({ person }) => {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = person;
  let spouse;
  let spouseInfo;

  if (sex === 'm') {
    spouse = 'wife';
    spouseInfo = `${partnerName} is my ${spouse}`;
  } else {
    spouse = 'husband';
    spouseInfo = `${partnerName} is my ${spouse}`;
  }

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age && <p className="Person__age">{`I am ${age}`}</p>}
      <p className="Person__partner">
        {!isMarried
          ? 'I am not married'
          : spouseInfo
        }
      </p>
    </section>
  );
};
