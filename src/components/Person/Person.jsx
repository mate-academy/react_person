export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  return (
    <div className="Person">
      <div className="Person__name">
        {name}
      </div>

      <div className="Person__age">
        {age}
      </div>


      <div className="Person__partner">
        {isMarried
          ? `My ${sex === 'm' ? 'wife' : 'husband'} is ${partnerName}`
          : 'I am not married'}
        </div>;
    </div>

  );
};
