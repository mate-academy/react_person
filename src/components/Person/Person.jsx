export const Person = ({
  name,
  age = 0,
  sex,
  isMarried,
  partnerName,
}) => (
  <>
    <section className="Person">

      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>

      <p className="Person__age">
        {age > 0 && (`I am ${age}`)
        }
      </p>

      <p className="Person__partner">
        {isMarried && sex === 'm' && (
          `${partnerName} is my wife`
        )}

        {isMarried && sex === 'f' && (
          `${partnerName} is my husband`
        )}

        {!isMarried && (
          `I am not married`
        )}
      </p>
    </section>
  </>
);
