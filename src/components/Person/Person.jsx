import './Person.scss';

const MALE_GENDER = 'm';

export const Person = (props) => {
  const { name, age, sex, isMarried, partnerName } = props.person;
  let marriageStatusInfo = `I am not married`;

  if (isMarried) {
    marriageStatusInfo = sex === MALE_GENDER
      ? `${partnerName} is my wife`
      : `${partnerName} is my husband`;
  }

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>
      {age && <p className="Person__age">{`I am ${age}`}</p>}
      <p className="Person__partner">
        {marriageStatusInfo}
      </p>
    </section>
  );
};
