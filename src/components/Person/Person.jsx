import './Person.scss';

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  let partner;
  let maritalStatus;

  if (isMarried) {
    partner = sex === 'f' ? 'husband' : 'wife';
    maritalStatus = `${partnerName} is my ${partner}`;
  } else {
    maritalStatus = 'I am not married';
  }

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>

      {person.age !== undefined && (
        <p className="Person__age">
          {`I am ${age}`}
        </p>
      )}
      <p className="Person__partner">
        {maritalStatus}
      </p>
    </section>
  );
};
