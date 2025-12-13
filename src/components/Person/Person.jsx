// export const Person = ({ person }) => ();
import React from 'react';
import cn from 'classnames';

 export const Person = ({person}) => {
  const { name, age, sex, isMarried, partnerName } = person;
  return (<section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      <p className="Person__age">{
      !age
      ? ''
      :`I am ${age}`}</p>
      <p className="Person__partner">{
        ! isMarried
        ? `I am not married`
        : sex === 'm'
        ?`${partnerName} is my wife`
        :`${partnerName} is my husband`
      }
      </p>
    </section>
    )
}
