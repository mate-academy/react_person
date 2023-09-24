
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

    {person.age && (
      <p className="Person__age">
        {`I am ${person.age}`}
      </p>
    )}

    <p className="Person__partner">
      {person.isMarried
        ? (`${person.partnerName} is my ${sortSex(person.sex)}`)
        : ('I am a not married')}
    </p>
  </div>
);
