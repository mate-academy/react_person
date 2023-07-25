// export const Person = ({ person }) => ();

// const marriedSex = ({sex, isMarried}) => {
//   if (isMarried) {
//     // return sex === 'm' ? wife : husband
//     return 'xui'
//   }
// }


export const Person = ({
  name,
  age,
  sex,
  isMarried,
  partnerName
}) => {
  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>
      <p className="Person__age">
        {age > 0 && (
        `I am ${age}`
        )}
      </p>
      <p className="Person__partner">
        {isMarried === true 
          ? (`${partnerName} is my ${sex === 'm' ? ' wife' : ' husband'}`)
          : 'I am not married'}
      </p>
    </section>
  )
}