export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  // Determine partner reference based on gender
  const partnerRelation = sex === 'f'
    ? 'husband'
    : 'wife';

  return (
    <div className="Person">
      <h2 className="Person__name">My name is {name}</h2>

      {/* Omit age if it is not present */}
      {age !== undefined && <p className="Person__age">I am {age}</p>}

      {/* Conditional rendering for marriage status */}
      <p className="Person__partner">
        {isMarried
          ? `${partnerName} is my ${partnerRelation}`
          : 'I am not married'}
      </p>
    </div>
  );
};
