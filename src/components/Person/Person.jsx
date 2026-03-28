export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;
  let partnerText;

  if (isMarried === false) {
    partnerText = 'I am not married';
  } else if (sex === 'm') {
    partnerText = `${partnerName} is my wife`;
  } else {
    partnerText = `${partnerName} is my husband`;
  }

  const ageElement =
    age !== undefined ?
    <p className="Person__age">I am {age}</p>
    : null;
  return (
    <div className="Person">
      <p className="Person__name">My name is {name}</p>
      {ageElement}
      <p className="Person__partner">{partnerText}</p>
    </div>
  );
};
