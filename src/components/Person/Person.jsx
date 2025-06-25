export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;
  const personStatus = sex === 'f' ? 'husband' : 'wife';

  return (
    <div className="Person">
      <div className="Person__name">My name is {name}</div>
      {age && <div className="Person__age">I am {age}</div>}
      <div className="Person__partner">
        {!isMarried
          ? 'I am not married'
          : `${partnerName} is my ${personStatus}`}
      </div>
    </div>
  );
};
