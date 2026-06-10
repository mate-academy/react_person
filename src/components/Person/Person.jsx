// export const Person = ({ person }) => ();
export function Person({ person }) {
  const { name, age, isMarried, sex, partnerName } = person;

  return (
    <div className="App">
      <section className="Person">
        <h2 className="Person__name">My name is {name}</h2>
        {age && <p className="Person__age">I am {age}</p>}
        <p className="Person__partner">
          {isMarried
          ? `${partnerName} is my ${sex === 'm' ? "wife" : "husband"}`
          : "I am not married"}
          </p>
        </section>
    </div>
  )
}
