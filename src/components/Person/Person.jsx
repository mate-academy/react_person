import './Person.scss';

const partnerBySex = {
  f: 'husband',
  m: 'wife',
};

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  const partnerInfo = isMarried
    ? `${partnerName} is my ${partnerBySex[sex]}`
    : 'I am not married';

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>

      {age > 0 && <p className="Person__age">I am {age}</p>}

      <p className="Person__partner">{partnerInfo}</p>
    </section>
  );
};
