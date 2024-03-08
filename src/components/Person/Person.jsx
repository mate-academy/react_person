export const Person = ({ person }) => (
  <div className="App">
    <section className="Person">
      <h2 className="Person__name">{`My name is ${person.name}`}</h2>
      {person.age > 0 && <p className="Person__age">{`I am ${person.age}`}</p>}
      <p className="Person__partner">
        {person.isMarried
          ? `${person.partnerName} is my ${person.sex === 'm' ? 'wife' : 'husband'}`
          : `I am not married`}
      </p>
    </section>
  </div>
);

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
