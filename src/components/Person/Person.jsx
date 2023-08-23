import './Person.scss';

export const Person = ({ person }) => {
  const WOMAN_GENDER = 'f';
  const MAN_GENDER = 'm';

  const {
    name,
    age,
    isMarried,
    sex,
    partnerName,
  } = person;

  function getMarriedInfo() {
    if (sex === MAN_GENDER && isMarried) {
      return <>{`${partnerName} is my wife`}</>;
    }

    if (sex === WOMAN_GENDER && isMarried) {
      return <>{`${partnerName} is my husband`}</>;
    }

    return <>I am not married</>;
  }

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>

      <>
        {age && (
          <p className="Person__age">
            {`I am ${age}`}
          </p>
        )}
      </>

      <p className="Person__partner">
        {getMarriedInfo()}
      </p>
    </section>
  );
};
