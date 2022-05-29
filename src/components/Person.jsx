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

  const personPartner = sex === 'm' ? 'wife' : 'husband';
  const marriageStatus = isMarried
    ? `My ${personPartner}'s name is ${partnerName}`
    : 'I am not married';

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>
      <p className="Person__age">
        { age && `I am ${age}`}
      </p>
      <p className="Person__partner">
        {marriageStatus}
      </p>
    </section>
  );
};

Person.defaultProps = {
  age: 0,
  partnerName: '',
};

// eslint-disable-next-line react/no-typos
Person.PropTypes = {
  person: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    sex: PropTypes.string.isRequired,
    isMarried: PropTypes.bool.isRequired,
    partnerName: PropTypes.string,
  }),
};
