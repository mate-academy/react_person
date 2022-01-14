import React from 'react';
import './Person.scss';

export const Person = ({
  name,
  age,
  sex,
  isMarried,
  partnerName,
}) => (
  <>
    <section className="Person">
      <h2 className="Person__name">
        My name is
        {' '}
        {name}
      </h2>

      {(age ? (
        <p className="Person__age">
          I am
          {' '}
          {age}
        </p>
      ) : (
        null
      )
      )}

      {
        partnerName && (
          (sex === 'm' ? (
            <p className="Person__partner">
              My wife&apos;s name is
              {' '}
              {partnerName}
            </p>
          ) : (
            <p className="Person__partner">
              My husband&apos;s name is
              {' '}
              {partnerName}
            </p>
          )
          )
        )}

      {
        !isMarried && (
          <p className="Person__partner">I am not married</p>
        )
      }
    </section>
  </>
);
