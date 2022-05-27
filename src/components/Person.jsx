import PropTypes from 'prop-types';
import './person.scss';

export const Person = ({ person }) => {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = person;

  return (
    <section className="Person">
      <h2 className="Person__name">
        { name ? `My name is ${name}` : 'Unknown'}
      </h2>
      <p className="Person__age">
        { age && `I am ${age}`}
      </p>
      <p className="Person__partner">
        {(!isMarried && 'I am not married')
        || (`My ${sex === 'm' ? 'wife' : 'husband'}'s name is ${partnerName}`)}
      </p>
    </section>
  );
};

Person.defaultProps = {
  name: '',
  age: 0,
  sex: '',
  isMarried: false,
  partnerName: '',
};

// eslint-disable-next-line react/no-typos
Person.PropTypes = {
  person: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
    sex: PropTypes.string,
    isMarried: PropTypes.bool,
    partnerName: PropTypes.string,
  }),
};
