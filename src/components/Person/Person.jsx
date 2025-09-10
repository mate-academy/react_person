import PropTypes from 'prop-types';
import './Person.scss';

export const Person = ({ person }) => (
  <section className="Person">
    <h2 className="Person__name">{`My name is ${person.name}`}</h2>
    {person.age !== undefined && (
      <p className="Person__age">{`I am ${person.age}`}</p>
    )}
    {person.isMarried ? (
      <p className="Person__partner">{`${person.partnerName} is ${person.sex === 'm' ? 'wife' : 'husband'}`}</p>
    ) : (
      <p className="Person__partner">I am not married</p>
    )}
  </section>
);

Person.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
    sex: PropTypes.string,
    isMarried: PropTypes.bool,
    partnerName: PropTypes.string,
  }).isRequired,
};
