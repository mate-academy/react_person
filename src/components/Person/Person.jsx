
export const Person = ({ person }) => (

  <div className="Person">
    <h2 className="Person__name">
      {`My name is ${person.name}`}
    </h2>
    <div className="Person__age">
      {person.age > 0 && (
        `i am ${person.age}`
      )}
    </div>
    <p className="Person__partner">
      {person.isMarried === true ? (
        `${person.partnerName} is my
        ${
          person.sex === 'm' ? (
            'wife'
          ) : (
            'husband'
          )
        }`
      ) : (
        'I am a not married'
      )}
    </p>
  </div>
);
