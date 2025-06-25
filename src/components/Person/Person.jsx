import './Person.scss';

function getPartnerRelationship(person) {
  return person.sex === 'm' ? 'wife' : 'husband';
}

export const Person = ({ person }) => (
  <section className="Person">
    <h2 className="Person__name">
      {`My name is ${person.name}`}
    </h2>
    <p className="Person__age">
      {person.age && (
        <p>{`I am ${person.age}`}</p>
      )}
    </p>
    <p className="Person__partner">
      {!person.isMarried ? (
        <p>I am not married</p>
      ) : (
        <p>
          {`${person.partnerName} is my ${getPartnerRelationship(person)}`}
        </p>
      )}
    </p>
  </section>
);

export const misha = {
  name: 'Misha',
  age: 37,
  sex: 'm',
  isMarried: true,
  partnerName: 'Natasha',
};

export const alex = {
  name: 'Alex',
  age: 25,
  sex: 'm',
  isMarried: false,
};

export const olya = {
  name: 'Olya',
  sex: 'f',
  isMarried: true,
  partnerName: 'Maksym',
};
