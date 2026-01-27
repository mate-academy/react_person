// export const Person = ({ person }) => ();
// testes para github

function getPartnerLabel(gender, partnerName) {
  return gender === 'male' ? `Wife: ${partnerName}` : `Husband: ${partnerName}`;
}

const Person = ({ person }) => {
  const { name, age, partnerName, gender } = person;

  return (
    <div className="Person">
      <h2 className="Person__name">My name is {name}</h2>

      {age && <p className="Person__age">I am {age}</p>}

      <p>
        {partnerName
          ? getPartnerLabel(gender, partnerName)
          : 'I am not married'}
      </p>
    </div>
  );
};

export default Person;
