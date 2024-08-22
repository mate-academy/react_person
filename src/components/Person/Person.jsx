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

const getPartnerMessage = person => {
  if (person.isMarried === false) {
    return 'I am not married';
  }

  if (person.sex === 'f') {
    return `${person.partnerName} is my husband`;
  }

  return `${person.partnerName} is my wife`;
};

export const Person = ({ person }) => (
  <section className="Person">
    <h2 className="Person__name">{`My name is ${person.name}`}</h2>
    {person.age && <p className="Person__age">{`I am ${person.age}`}</p>}

    <p className="Person__partner">{getPartnerMessage(person)}</p>
  </section>
);
