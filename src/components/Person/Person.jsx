import React from 'react';

// const Person = ({
//   name,
//   sex,
//   age,
//   isMarried,
//   partnerName,
// }) => {

const Person = (props) => (
  <>
    <h2 className="Person__name">{`My name is ${props.name}`}</h2>

    {props.age && (
      <p className="Person__age">{`I am ${props.age}`}</p>
    )}

    <p className="Person__partner">
      {props.isMarried
        ? `My ${props.sex === 'm' ? `wife's` : `husband's`} name is ${props.partnerName}`
        : 'I am not married'
        }
    </p>
  </>
);

// {sex === 'm' && (
//         <p className="Person__partner">{`My wife&apos;s name is ${partnerName}`}</p>
//       )}

//       {sex === 'f' && (
//         <p className="Person__partner">{`My husband&apos;s name is ${partnerName}`}</p>
//       )}

//  {age
//         ? <p className="Person__age">{`I am ${age}`}</p>
//         : null }

//  <p className="Person__partner">
//         {sex === 'm'
//           ? `My wife&apos;s name is ${partnerName}`
//           : `My husband&apos;s name is ${partnerName}`
//         }
//       </p>

// return sex === 'm' ? (
//   <p className="Person__partner">{`My wife&apos;s name is ${partnerName}`}</p>
// ) : (
//   <p className="Person__partner">{`My husband&apos;s name is ${partnerName}`}</p>
// );

// <>
// <h2 className="Person__name">{`My name is ${name}`}</h2>
// <p className="Person__age">{`I am ${age}`}</p>
// </>

// {/* <section className="Person">
//   <h2 className="Person__name">{`My name is ${name}`}</h2>
//   <p className="Person__partner">{`My husband&apos;s name is ${partnerName}`}</p>
// </section> */}

// {/* <section className="Person">
//   <h2 className="Person__name">{`My name is ${name}`}</h2>
//   <p className="Person__age">{`I am ${age}`}</p>
//   <p className="Person__partner">I am not married</p>
// </section> */}

export default Person;
