export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  let partnerText = 'I am not married';

  if (isMarried) {
    if (sex === 'm') {
      partnerText = `${partnerName} is my wife`;
    } else {
      partnerText = `${partnerName} is my husband`;
    }
  }

  return (
    <div className="Person">
      <div className="Person__name">My name is {name}</div>

      {age !== undefined && <div className="Person__age">I am {age}</div>}

      <div className="Person__partner">{partnerText}</div>
    </div>
  );
};
