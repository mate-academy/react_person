import classNames from 'classnames';

export const Person = ({ person }) => {
  let {name, age, married} = person

  let isfemale = name === 'olya';
  let partner = isfemale ? 'husband' : 'wife';
  return (
    <React.Fragment>
    <div> name: { name }</div>
    <div> age: { age }</div>
    <div> married: { married }</div>
    { married ? (
      <div>{ partner }</div>
    ): <div>I'm not married</div>}
    </React.Fragment>
  )
};


