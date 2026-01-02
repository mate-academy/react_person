export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;
  const marriedPartnerText =
    sex === 'm' ? `${partnerName} is my wife` : `${partnerName} is my husband`;
  const partnerText = isMarried ? marriedPartnerText : 'I am not married';

  return (
    <>
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age != null && <p className="Person__age">{`I am ${age}`}</p>}
      <p className="Person__partner">{partnerText}</p>
    </>
  );
};
