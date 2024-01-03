const MAN = 'm';
const WOMAN = 'f';

export const Person = ({
  person: { name, age, sex, partnerName, isMarried },
}) => {
  let familyStatus;

  if (isMarried && (sex === MAN || sex === WOMAN)) {
    familyStatus = sex === MAN
      ? `${partnerName} is my wife`
      : `${partnerName} is my husband`;
  } else {
    familyStatus = 'I am not married';
  }

  return (
    <div className="App">
      <section className="Person">
        <h2 className="Person__name">{`My name is ${name}`}</h2>

        {age && (<p className="Person__age">{`I am ${age}`}</p>)}

        <p className="Person__partner">
          {familyStatus && <span>{familyStatus}</span>}
        </p>
      </section>
    </div>
  );
};
