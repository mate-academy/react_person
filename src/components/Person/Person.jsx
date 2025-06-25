import './Person.scss';

const HUSBAND = 'husband';
const WIFE = 'wife';

export const Person = ({ person }) => {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = person;

  const partner = sex === 'm' ? WIFE : HUSBAND;

  const marriedStatus = isMarried
    ? `${partnerName} is my ${partner}`
    : 'I am not married';

  return (
    <div className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>

      {age && (
        <p className="Person__age">
          {`I am ${age}`}
        </p>
      )}

      <p className="Person__partner">
        {`${marriedStatus}`}
      </p>
    </div>
  );
};
