/* eslint-disable prettier/prettier */
/* eslint-disable no-nested-ternary */
// export const Person = ({ person }) => ();
export const Person = ({
  person: { name, age, partnerName, sex, isMarried },
}) => (
  <section className="Person">
    <h2 className="Person__name">{`My name is ${name}`}</h2>
    {age && <p className="Person__age">{`I am ${age}`}</p>}
    <p className="Person__partner">
      {
        !isMarried
          ? 'I am not married'
          : sex === 'm'
            ? `${partnerName} is my wife`
            : `${partnerName} is my husband`
      }
    </p>
  </section>
);
