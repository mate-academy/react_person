export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  let partnerInfo;

  if (partnerName && isMarried) {
    if (sex === 'm') {
      partnerInfo = `My wife is ${partnerName}`;
    } else if (sex === 'f') {
      partnerInfo = `My husband is ${partnerName}`;
    } else {
      partnerInfo = null;
    }
  } else {
    partnerInfo = 'I am not married';
  }

  return (
    <>
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      <p className="Person__age">{age ? `I am ${age}` : null}</p>
      <p className="Person__partner">{partnerInfo}</p>
    </>
  );
};
