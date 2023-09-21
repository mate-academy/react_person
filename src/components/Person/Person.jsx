
const sortSex = (gender) => {
  if (gender === 'm') {
    return 'wife';
  }

  return 'husband';
};

export const Person = ({ person }) => (
  <div className="Person">
    <h2 className="Person__name">
      {`My name is ${person.name}`}
    </h2>
    <div className="Person__age">
      {person.age > 0 ? (
        `I am ${person.age}`
      ): undefined}
    </div>
    <p className="Person__partner">
      {person.isMarried === true ? (
        `${person.partnerName} is my ${sortSex(person.sex)}`
      ) : (
        'I am a not married'
      )}
    </p>
  </div>
);
