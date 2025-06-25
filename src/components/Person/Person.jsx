// export const Person = ({ person }) => ();
import './Person.scss';

export const Person = ({ person }) => {
  const { name, age, isMarried, gender, partnerName } = person;

  return (
    <div className="Person">
      <p className="Person__name">{name}</p>

      {/* Показуємо вік тільки якщо він вказаний */}
      {age !== undefined && <p className="Person__age">Age: {age}</p>}

      {/* Показуємо інформацію про шлюб */}
      {isMarried ? (
        <p className="Person__partner">
          Partner&apos;s name: {partnerName} (
          {gender === 'male' ? 'wife' : 'husband'})
        </p>
      ) : (
        <p className="Person__partner">I am not married</p>
      )}
    </div>
  );
};
