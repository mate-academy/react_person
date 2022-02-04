import React from 'react';
import { bool, string } from 'prop-types';

const MarriedStatus = ({ isMarried, sex, partnerName }) => {
  if (!isMarried) {
    return <p className="Person__partner">I am not married</p>;
  }

  return (
    <section className="Person">
      <p className="Person__partner">
        My
        {' '}
        {sex === 'm' ? "wife's" : "husband's"}
        {' '}
        name is
        {partnerName}
      </p>
    </section>
  );
};

MarriedStatus.propTypes = {
  isMarried: bool.isRequired,
  sex: string.isRequired,
  partnerName: string,
};

MarriedStatus.defaultProps = {
  partnerName: '',
};

export default MarriedStatus;
