export const Person = ({person}) => {
  const {name, age, sex, partnerName} = person

  let partnerStatus = 'I am not married'

  if (partnerName) {
    partnerStatus = `${partnerName} is ${sex === 'm' ? 'my wife' : 'my husband'}`
  }

  return (
    <section className="Person">
    <h2 className="Person__name">My name is {name}</h2>
    {person.age && (
      <p className="Person__age">I am {age}</p>
    )}
    <p className="Person__partner">
      {partnerStatus}
    </p>
    </section>
  )
}
