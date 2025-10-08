// export const Person = ({ person }) => ();
export const Person = ({ person }) => {
  const { name, sex, age, partnerName, isMarried } = person;

  const partnerRelation = sex === 'f'
    ? 'husband'
    : 'wife';

  const partnerText = isMarried
    ? `${partnerName} is my ${partnerRelation}`
    : 'I am not married';

  return (
    <div className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age && <p className="Person__age">{`I am ${age}`}</p>}
      <p className="Person__partner">{partnerText}</p>
    </div>
  );
};

export default Person;
