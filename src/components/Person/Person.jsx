/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable react/react-in-jsx-scope */
const Person = ({ name,
  age,
  sex,
  isMarried,
  partnerName }) => (

    <>
      <div className="App">
        <section className="Person">
          <h2 className="Person__name">
            My name is
            {' '}
            { name }
          </h2>
          {age ? (
            <p className="Person__age">
              I am
              {' '}
              { age }
            </p>
          ) : null }

          {!isMarried ? <p className="Person__partner">I am not married</p>

            : (
              <p className="Person__partner">

                { partnerName }

                { sex === 'f'
                  ? <span>is my husband</span>
                  : <span>is my wife</span>}

              </p>
            ) }
        </section>
      </div>
    </>
);

export default Person;
