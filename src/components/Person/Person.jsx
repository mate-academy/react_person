export const Person = ({ person }) => {
  const { name, sex, isMarried, age, partnerName } = person;

  return (
    <div className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>
      {person.age && (
        <p className="Person__age">
          {`I am ${age}`}
        </p>
      )}
      <p className="Person__partner">
        {isMarried
          ? `${partnerName} is my ${sex === 'm' ? 'wife' : 'husband'}`
          : 'I am not married'
        }
      </p>
    </div>
  );
};
