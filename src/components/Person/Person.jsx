export const Person = ({ person }) => (
  <section className="Person">

    <h2 className="Person__name">
      {`My name is ${person.name}`}
    </h2>

    {person.age && (
    <p className="Person__age">
      {`I am ${person.age}`}
    </p>
    )}

    {!person.isMarried
      ? (<p className="Person__partner">I am not married</p>)
      : (
        <p className="Person__partner">
          {`${person.partnerName} is my ${person.sex === 'f' ? 'husband' : 'wife'}`}
        </p>
      )}
  </section>
);

/* <div className="App">
    <section className="Person">
      <h2 className="Person__name">My name is Misha</h2>
      <p className="Person__age">I am 37</p>
      <p className="Person__partner">Natasha is my wife</p>
    </section>

    <section className="Person">
      <h2 className="Person__name">My name is Olya</h2>
      <p className="Person__partner">Maksym is my husband</p>
    </section>

    <section className="Person">
      <h2 className="Person__name">My name is Alex</h2>
      <p className="Person__age">I am 25</p>
      <p className="Person__partner">I am not married</p>
    </section>
  </div> */
