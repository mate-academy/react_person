export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  const partnerMass = sex === 'm' ? 'wife' : 'husband';

  const isMarrieds = isMarried
    ? `${partnerName} is my ${partnerMass}`
    : 'I am not married';

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {age && <p className="Person_age">I am {age}</p>}
      <p className="Person__partner">{isMarrieds}</p>
    </section>
  );
};

export const misha = {
  name: 'Misha',
  age: 37,
  sex: 'm',
  isMarried: true,
  partnerName: 'Natasha',
};

export const olya = {
  name: 'Olya',
  sex: 'f',
  isMarried: true,
  partnerName: 'Maksym',
};

export const alex = {
  name: 'Alex',
  age: 25,
  sex: 'm',
  isMarried: false,
};
