export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person

  const isMarriedPerson = isMarried ? `${partnerName} is my ${sex === 'm' ? 'husband' : 'wife'}` : 'I am not married'

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {age !== undefined && <p className="Person__age">I am {age}</p>}

      <p className="Person__partner">{isMarriedPerson}</p>
    </section>
  )
}
