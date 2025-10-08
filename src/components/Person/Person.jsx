// export const Person = ({ person }) => ();
export const Person = ({ name, sex, age, partnerName, isMarried }) => (
  <>
    <h2 className="Person__name">{`My name is ${name}`}</h2>
    <p className="Person__age">{`I am ${age}`}</p>
    <p className="Person__partner">
      {isMarried
        ? `${partnerName} is my ${sex === 'm' ? 'wife' : 'husband'}`
        : 'I am not married'}
    </p>
  </>
);

export default Person;
