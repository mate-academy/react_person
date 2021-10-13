import React from 'react';
import PropTypes from 'prop-types';
import '../../App.scss';

export function Person(props) {
  return (
    <section className="Person">
      <h2 className="Person__name">
        {props.name ? `My name is ${props.name}` : 'Enter your name!'}
      </h2>

      <p className="Person__age">
        {props.age ? `I am ${props.age}` : null}
      </p>

      {props.isMarried && (
        <p className="Person__partner">
          {`My ${props.sex === 'm'
            ? "wife's" : "husband's"} name is ${props.partnerName}`}
        </p>
      )}

    </section>
  );
}

Person.defaultProps = {
  age: null,
  sex: null,
  isMarried: null,
  partnerName: null,
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  sex: PropTypes.string,
  isMarried: PropTypes.bool,
  partnerName: PropTypes.string,
};
