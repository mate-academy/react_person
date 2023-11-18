export const Person = props => (
  <section className="Person">
    <h2 className="Person__name">{`My name is ${props.person.name}`}</h2>

    {props.person.age && (
      <p className="Person__age">{`I am ${props.person.age}`}</p>
    )}

    <p className="Person__partner">
      {props.person.isMarried ? (
        `${props.person.partnerName} is my ${props.person.sex === 'm' ? 'wife' : 'husband'}`
      ) : 'I am not married'}
    </p>
  </section>
);
