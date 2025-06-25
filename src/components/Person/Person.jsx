export const Person = ({ person }) => {
  const { name, age = 0, sex, isMarried, partnerName = '' } = person;

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age
        ? <p className="Person__age">{`I am ${age}`}</p>
        : null
      }
      <p className="Person__partner">
        {
          isMarried
            ? `${partnerName} is my ${getPartnerGender(sex)}`
            : 'I am not married'
        }
      </p>
    </section>
  );
};

function getPartnerGender(sex) {
  return sex === 'm' ? 'wife' : 'husband';
}
