const MALE = 'm';
const WIFE = 'wife';
const HUSBAND = 'husband';
const NOT_MARRIED_PERSON_MESSAGE = 'I am not married';

const getPartner = (isMarried, sex) => {
  if (isMarried) {
    return sex === MALE
      ? WIFE
      : HUSBAND;
  }

  return NOT_MARRIED_PERSON_MESSAGE;
};

export const Person = ({ person }) => {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = person;

  const partnerInfo = partnerName
    ? `${partnerName} is my ${getPartner(isMarried, sex)}`
    : NOT_MARRIED_PERSON_MESSAGE;

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>
      {age && (
        <p className="Person__age">{`I am ${age}`}</p>
      )}
      <p className="Person__partner">
        {partnerInfo}
      </p>
    </section>
  );
};
