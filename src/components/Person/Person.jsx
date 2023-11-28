export const Person = props => (
  <section className="Person">
    <h2 className="Person__name">
      My name is 
      {props.person.name}
    </h2>
    { props.person.age ? (
      <p className="Person__age">
        I am 
        {props.person.age}
      </p>
    ) : <></> }
    { props.person.isMarried && props.person.sex === 'm' ? (
      <p className="Person__partner">
        {props.person.partnerName}
        {' '}
        is my wife
      </p>
    ) : <></> }
    { props.person.isMarried && props.person.sex === 'f' ? (
      <p className="Person__partner">
        {props.person.partnerName}
        {' '}
        is my husband
      </p>
    ) : <></> }
    {!props.person.isMarried ? (
      <p className="Person__partner">I am not married</p>
    ) : <></> }
  </section>
);
