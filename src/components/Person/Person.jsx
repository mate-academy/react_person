export function Person({ person: { name, age, sex, married, partner } }) {
  return (
    <div className="Person">
      <p className="Person__name">
        {name}
      </p>

      {age && (
        <p className="Person__age">
          {age} years old
        </p>
      )}

      <p className="Person__partner">
        {married
          ? `My ${sex === 'female' ? 'husband' : 'wife'} is ${partner}`
          : 'I am not married'
        }
      </p>
    </div>
  );
}