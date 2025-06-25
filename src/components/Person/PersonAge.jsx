export const PersonAge = ({ age }) =>
  age >= 0 ? <p className="Person__age">I am {age}</p> : null;
