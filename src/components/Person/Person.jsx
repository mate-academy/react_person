/**
 * @typedef {'m' | 'f'} Sex
 */

/**
 * @typedef {Object} PersonProps
 * @property {Object} person
 * @property {string} person.name
 * @property {number} person.age
 * @property {Sex} person.sex
 * @property {boolean} person.isMarried
 * @property {string} person.partnerName
 */

/**
 * Generates a Person component
 * @param {PersonProps} param0 A person object
 * @returns {JSX.Element} A Person component
 */
export const Person = ({
  person: { name, age, isMarried, partnerName, sex },
}) => {
  const partnerDescription = isMarried
    ? `${partnerName} is my ${sex === 'm' ? 'wife' : 'husband'}`
    : 'I am not married';

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>

      {age && <p className="Person__age">I am {age}</p>}

      <p className="Person__partner">{partnerDescription}</p>
    </section>
  );
};
