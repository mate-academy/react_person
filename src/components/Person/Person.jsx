export const Person = ({ person }) => {
  const { name, age, married, gender, partner } = person;
  let partnerLine = null;

  if (married) {
    const partnerLabel =
      gender === 'male'
        ? 'wife'
        : 'husband';

    partnerLine = `${partnerLabel}: ${partner}`;
  } else {
    partnerLine = 'I am not married';
  }

  return (
    <div className="Person">
      <div className="Person__name">{name}</div>
      {age != null && <div className="Person__age">{age}</div>}
      <div className="Person__partner">{partnerLine}</div>
    </div>
  );
};
