export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;
  const MALE = 'm';
  const HUSBAND = 'husband';
  const WIFE = 'wife';
  const partner = sex === MALE ? WIFE : HUSBAND;
  const partnerText = isMarried ? `${partnerName} is my ${partner}` : 'I am not married';

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age && (
        <p className="Person__age">{`I am ${age}`}</p>
      )}
      <p className="Person__partner">{partnerText}</p>
    </section>
  );
};
