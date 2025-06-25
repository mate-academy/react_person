export const Person = ({ person }) => {
  let partnerText;

  if (person.isMarried) {
    if (person.sex === 'm') {
      partnerText = 'Natasha is my wife';
    } else {
      partnerText = 'Maksym is my husband';
    }
  } else {
    partnerText = 'I am not married';
  }

  return (
    <div className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>
      {person.age && <p className="Person__age">I am {person.age}</p>}
      <p className="Person__partner">{partnerText}</p>
    </div>
  );
};
