export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;
  const isMale = sex === 'm' || sex === 'male';
  const partnerWord = isMale ? 'wife' : 'husband';

  return (
    <div className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {age !== null && age !== undefined && <p className="Person__age">I am {age}</p>}
      <p className="Person__partner">
        {isMarried
          ? `${partnerName} is my ${partnerWord}`
          : 'I am not married'}
      </p>
    </div>
  );
};
