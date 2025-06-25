const MALE = 'm';
const FEMALE = 'f';

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  let partnerText = 'I am not married';

  if (isMarried) {
    switch (sex) {
      case MALE:
        partnerText = `${partnerName} is my wife`;
        break;
      case FEMALE:
        partnerText = `${partnerName} is my husband`;
        break;
      default:
        break;
    }
  }

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {age && <p className="Person__age">I am {age}</p>}
      <p className="Person__partner">{partnerText}</p>
    </section>
  );
};
