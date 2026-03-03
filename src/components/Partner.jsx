export const Partner = ({ other, me = 'm' }) => {
  if (!other) {
    return <p className="Person__partner">I am not married</p>;
  }

  if (me === 'f') {
    return <p className="Person__partner">{other} is my husband</p>;
  }

  return <p className="Person__partner">{other} is my wife</p>;
};
