const unmarriedInfo = 'I am not married';
const maleRelationshipStatus = 'husband';
const femaleRelationshipStatus = 'wife';

export const Person = ({ person }) => {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = person;

  const personPartner = sex === 'f'
    ? maleRelationshipStatus
    : femaleRelationshipStatus;

  const marriedInfo = isMarried
    ? `${partnerName} is my ${personPartner}`
    : unmarriedInfo;

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>

      {Boolean(age)
      && (
        <p className="Person__age">{`I am ${age}`}</p>
      )}

      <p className="Person__partner">
        {marriedInfo}
      </p>
    </section>
  );
};
