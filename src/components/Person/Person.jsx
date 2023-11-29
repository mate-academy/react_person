import './Person.scss';

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  const partner = sex === 'm' ? 'wife' : 'husband';

  return (
    <div className="Person">
      <p className="Person__name">
        {`My name is ${name}`}
      </p>
      {age !== undefined && (
        <p className="Person__age">
          {`I am ${age}`}
        </p>
      )}
         {partnerName} is my ${partner}
    </div>
  );
};
