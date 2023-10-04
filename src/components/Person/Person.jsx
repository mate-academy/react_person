export const Person = ({ person }) => {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = person;

  function getPartnerSex(personSex) {
    return personSex === 'f' ? 'husband' : 'wife';
  }

  const marriedStatus = isMarried
    ? `${partnerName} is my ${getPartnerSex(sex)}`
    : 'I am not married';

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>
      {age && (
        <p className="Person__age">
          {`I am ${age}`}
        </p>
      )}
      {isMarried ? (
        <p className="Person__partner">
          {marriedStatus}
        </p>
      ) : (
        <p className="Person__partner">
          {marriedStatus}
        </p>
      )}
    </section>
  );
};
