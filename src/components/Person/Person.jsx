export const Person = ({ person }) => {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = person;

  const marriedStatus = isMarried
    ? `${partnerName} is my ${getPersonSex(sex)}`
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
      <p className="Person__partner">
        {marriedStatus}
      </p>
    </section>
  );
};

function getPersonSex(personSex) {
  return personSex === 'f' ? 'husband' : 'wife';
}
