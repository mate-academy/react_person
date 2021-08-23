import React from 'react'
import PropTypes from 'prop-types'

export function Person({
  name = '',
  age = 0,
  sex = 'm',
  isMarried = false,
  partnerName = '',
}) {
  return (
    <section className="Person">
      <h2 className="Person__name">
        {'My name is '}
        {name}
      </h2>
      { !!age && (
        <p className="Person__age">
          {`I am ${age}`}
        </p>
      )}
      {
        <p className="Person__partner">
          {
            isMarried
            ? `My ${sex === 'm' ? `wife's` : `husband's`} name is ${partnerName}`
            : `I am not married`
          }
        </p>
      }
    </section>
  );
}

Person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  sex: PropTypes.oneOf(['m', 'f']),
  isMarried: PropTypes.bool,
  partnerName: PropTypes.string,
}