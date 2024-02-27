import './Person.scss';

export const Person = ({ name, age, sex, isMarried, partnerName }) => (
  <section className="Person">
    <h2 className="Person__name">
      {`My name is ${name}`}
    </h2>

    {age && (
      <p className="Person__age">
        {`I am ${age}`}
      </p>
    )}

    {isMarried && (
      <p className="Person__partner">
        {sex === 'm' ? `${partnerName} is my wife` : `${partnerName} is my husband`}
      </p>
    )}
  </section>
);
