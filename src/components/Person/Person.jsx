import './Person.scss';

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

export const Person = ({ person }) => {
  if (!person) return null;

  const { name, sex, isMarried, partnerName, age } = person;

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {age !== undefined ? <p className="Person__age">I am {age}</p> : null}
      {isMarried ? (
        <p className="Person__partner">
          {partnerName} is my {sex === 'm' ? 'wife' : 'husband'}
        </p>
      ) : (
        <p className="Person__partner">I am not married</p>
      )}
    </section>
  );
};
