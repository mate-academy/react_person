export const GENDER_MALE = 'm';
export const WIFE = 'wife';
export const HUSBAND = 'husband';

export const Person = ({ person:
  { name, age, sex, isMarried, partnerName } }) => {
  let getStatus;

  if (isMarried) {
    getStatus = `${partnerName} is my ${sex === GENDER_MALE ? WIFE : HUSBAND}`;
  } else {
    getStatus = 'I am not married';
  }

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>

      {age && <p className="Person__age">{`I am ${age}`}</p>}

      <p className="Person__partner">{getStatus}</p>
    </section>
  );
};
