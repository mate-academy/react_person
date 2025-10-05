export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;
  const hasAge = age !== undefined && age !== 0;
  let partnerText;

  if (!isMarried) {
    partnerText = 'I am not married';
  } else if (sex === 'm') {
    partnerText = `${partnerName} is my wife`;
  } else {
    partnerText = `${partnerName} is my husband`;
  }

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {/* Якщо існує і якщо не 0 */}
      {/* {age && age !== 0 ? <p className="Person__age">I am {age}</p> : ''} */}
      {/* {age && age !== 0 && <p className="Person__age">I am {age}</p>} */}
      {hasAge && <p className="Person__age">I am {age}</p>}
      <p className="Person__partner">{partnerText}</p>
    </section>
  );
};
