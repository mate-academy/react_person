const PERSON_FEMALE_SEX = 'f';

export const Person = ({ person }) => {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = person;
  let partnerMessage = '';

  if (!isMarried) {
    partnerMessage = 'I am not married';
  } else {
    const partnerRole = sex === PERSON_FEMALE_SEX
      ? 'husband'
      : 'wife';

    partnerMessage = `${partnerName} is my ${partnerRole}`;
  }

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>

      {Boolean(age) && (
        <p className="Person__age">
          {`I am ${age}`}
        </p>
      )}

      <p className="Person__partner">
        {partnerMessage}
      </p>
    </section>
  );
};
