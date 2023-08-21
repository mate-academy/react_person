// export const Person = ({ person }) => ();
export const Person = ({ name,
  age,
  partnerName,
  isMarried }) => (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age && <p className="Person__age">{`I am ${age}`}</p>}
      {isMarried
        ? <p className="Person__partner">{`${partnerName} is my wife`}</p>
        : <p className="Person__partner">I am not married</p>}
    </section>
);
