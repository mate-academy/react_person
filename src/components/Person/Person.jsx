export const Person = ({ person:
  { name,
    age,
    partnerName,
    sex,
    isMarried } }) => (
      <section className="Person">
        <h2 className="Person__name">
          {`My name is ${name}`}
        </h2>
        { age !== undefined
        && (
        <p className="Person__age">
          {`I am  ${age}`}
        </p>
        )
        }
        {isMarried
          ? (
            <p className="Person__partner">
              {
      `${partnerName} is my ${sex === 'm' ? 'wife' : 'husband'}`}
            </p>
          )
          : <p>I am not married</p>}
      </section>
);
