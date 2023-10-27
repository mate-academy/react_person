// export const Person = ({ person }) => ();
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

function partner(isMarried, sex, partnerName = undefined) {
  if (isMarried === true) {
    const personPartner = sex === 'm' ? 'wife' : 'husband';

    return `${partnerName} is my ${personPartner}`;
  }

  return 'I am not married';
}

function years(personAge) {
  if (personAge !== undefined) {
    return `I am ${personAge}`;
  }

  return '';
}

export const Person = ({ person }) => (
  <section className="Person">
    <h2 className="Person__name">
      {`My name is ${person.name}`}
    </h2>
    <p className="Person__age">
      {years(person.age)}
    </p>
    <p className="Person__partner">
      {partner(person.isMarried, person.sex, person.partnerName)}
    </p>
  </section>
);
