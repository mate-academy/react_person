export const Person = (
  { person: {
    name,
    sex,
    age = 0,
    isMarried,
    partnerName,
  } },
) => (
  <section className="Person">
    <h2 className="Person__name">
      {`My name is ${name}`}
    </h2>

    {age > 0 && (
    <p className="Person__age">
        {`I am ${age}`}
    </p>
    )}

    {
      isMarried
        ? (
          <p className="Person__partner">
            {`${partnerName} is my ${sex === 'f' ? 'husband' : 'wife'}`}
          </p>
        )
        : (
          <p className="Person__partner">I am not married</p>
        )
    }

  </section>
);
