export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  const partnerGender = sex === 'm' ? 'wife' : 'husband';
  const partnerStatus = isMarried ? partnerGender : 'I am not married';

  const partnerText = partnerName ? `${partnerName} is my ${partnerStatus}` : partnerStatus;

  return (
    <div className="Person">
      <div className="Person__name">
        {`My name is ${name}`}
      </div>
      {age && (
      <div className="Person__age">
        {`I am ${age}`}
      </div>
      )}
      <div className="Person__partner">
        {partnerText}
      </div>
    </div>
  );
};
