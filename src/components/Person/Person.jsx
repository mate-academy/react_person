/* eslint-disable prettier/prettier */
export const Person = ({ person }) => {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = person;

  const nameText = `My name is ${name}`;
  const spouse = (sex === 'm')
    ? 'wife'
    : 'husband';
  const partnerText = (isMarried === true)
    ? `${partnerName} is my ${spouse}`
    : 'I am not married';

  return (
    <section className="Person">
      <h2 className="Person__name">{nameText}</h2>
      {age && <p className="Person__age">I am {age}</p>}
      <p className="Person__partner">{partnerText}</p>
    </section>
  );
};
