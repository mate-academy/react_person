import React from 'react';

const Partner = ({ sex, partnerName }) => (
  <>
    {`
      My ${sex === 'm'
      ? `wife's`
      : `husband's`} name is ${partnerName}
    `}
  </>
);

export default Partner;
