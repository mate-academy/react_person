import React from 'react';

export const PartnerName = ({ sex, name }) => (
  <p className="Person__partner">
    {sex === 'm'
      ? `${name} is my wife`
      : `${name} is my husband`}
  </p>
);
