/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-filename-extension */
const Person = ({
  name,
  age,
  sex,
  isMarried,
  partnerName,
}) => (

  <section className="Person">
    <h2 className="Person__name">
      My name is
      {name}
    </h2>
    {partnerName ? (
      <p className="Person__partner">
        My wife&apos;s name is
        {partnerName}
      </p>
    ) : (
      "I'm not married"
    )}

    {age ? (
      <p className="Person__age">
        I am
        {age}
      </p>
    ) : (
      false
    )}
  </section>
);

export default Person;
