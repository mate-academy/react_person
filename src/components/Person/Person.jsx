// import { misha } from '../../App';
// import { olya } from '../../App';
// import { alex } from '../../App';

export const Person = ({
  name,
  age,
  sex,
  isMarried,
  partnerName,
}) => (
  <section className="Person">
    <h2 className="Person__name">
      {`My name is ${name}`}
    </h2>
    <p className="Person__age">
      {age ? `I am ${age}` : null}
    </p>
    <p className="Person__partner">
      {!isMarried ? (
        `I am not married`
      ) : (
        `${partnerName} is ${sex === 'm' ? `my wife` : `my husband`}`
      ) }
    </p>
  </section>
);

// export const Misha = Person(misha);
// export const Olya = Person(olya);
// export const Alex = Person(alex);
