import React from 'react';

const MyPartner = ({ person }) => {
  const partnerSex = person.sex === 'f' ? 'husband' : 'wife';

  return (
    <p>
      {`My ${partnerSex}'s name is ${person.partnerName}`}
    </p>
  );
};

export default MyPartner;
