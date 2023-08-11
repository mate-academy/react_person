export const Person = ({ name, age, partner, sex }) => (
  <section className="Person">
    <h2 className="Person__name">{`My name is ${name}`}</h2>
    {age && <p className="Person__age">{`I am ${age}`}</p>}
    <p className="Person__partner">
      {`${!partner === true ? 'I am not married' : `${partner} is my
      ${sex === 'm' ? 'wife' : 'husband'}`}`}
    </p>
  </section>
);
