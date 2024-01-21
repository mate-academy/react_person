// export const Person = ({ person }) => ();
export const Person = ({ person }) => (
  <>
    <section className="Person">
      <p className="Person__name">{`My name is ${person.name}`}</p>
      {/* <p className="Person__age">{person.age && `I am ${person.age}`}</p>   */}

      {person.age !== undefined && (<p className="Person__age">{`I am ${person.age}`}</p>)}
      <p className="Person__partner">{(person.isMarried === true && person.sex === 'm') ? `${person.partnerName} is my wife` : `${person.partnerName} is my husband`}</p>
      <p className="Person__partner">{person.isMarried === false && `I am not married`}</p>
    </section>
  </>
);
