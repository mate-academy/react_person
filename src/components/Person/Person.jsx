/* eslint-disable prettier/prettier */
import './Person.css';

export const Person = ({ person }) => {
  const { name, age, isMarried, partnerName, sex } = person;
  const partnerRole = sex === 'm' ? 'wife' : 'husband';
  
  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
    {
      age === undefined
        ? null
        : (
        <p className="Person__age">
          {`I am ${age}`}
        </p>
        )
    }
      {isMarried === true
        ? (
          <p className="Person__partner">
            {`${partnerName} is my ${partnerRole}`}
          </p>
        )
        : (
          <p className="Person__partner">
            I am not married
          </p>
        )}
    </section>
  );
};
