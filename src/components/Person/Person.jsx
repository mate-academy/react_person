export const Person = ({ person }) => (
  <section className="Person">
    <h2 className="Person__name">
      My name is
      {person.name}
    </h2>

    {
      person.hasOwnProperty('age') && (
      <p className="Person__age">
        I am
        {person.age}
      </p>
      )
    }

    {
      person.isMarried
        ? (
          <p className="Person__partner">
            {
            `${person.partnerName} is my `

            + `${person.sex === 'f' ? 'husband' : 'wife'}`
          }
          </p>
        )
        : (
          <p className="Person__partner">I am not married</p>
        )
    }

  </section>
);
