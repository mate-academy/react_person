
export const Person = ({ person }) => {
    const { name, age, sex, isMarried, partnerName } = person;

    return (
         <section className="Person">
     <h2 className="Person__name">{name}</h2>
    {age &&  <p className="Person__age">{age}</p>}

    {isMarried === false ? <p className="Person__partner">I am not married</p> : ''}
    {sex === 'm' && isMarried === true ? <p className="Person__partner">{partnerName} is my wife </p> : ''}
    {sex === 'f' && isMarried === true ? <p className="Person__partner">{partnerName} is my husband </p> : ''}
    </section>
    )
};
