const MALE = 'm';
const WIFE = 'wife';
const HUSBAND = 'husband';
const NOT_MARRIED_PERSON = 'I am not married';

export const Person = ({ person }) => {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = person;

  const getPartner = () => {
    if (isMarried) {
      return sex === MALE
        ? WIFE
        : HUSBAND;
    }

    return NOT_MARRIED_PERSON;
  };

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>

      {age && (
        <p className="Person__age">{`I am ${age}`}</p>
      )}

      <p className="Person__partner">
        {partnerName
          ? `${partnerName} is my ${getPartner()}`
          : NOT_MARRIED_PERSON
        }
      </p>
    </section>
  );
};
