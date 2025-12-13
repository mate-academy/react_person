// export const Person = ({ person }) => ();
 export const Person = ({person}) => {
  const { name, age, sex, isMarried, partnerName } = person;
  const partnerText = ! isMarried
        ? `I am not married`
        : sex === 'm'
        ?`${partnerName} is my wife`
        :`${partnerName} is my husband`;
  return (<section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age && <p className="Person__age">{`I am ${age}`}</p>}
      <p className="Person__partner">{partnerText}</p>
    </section>
    )
}
