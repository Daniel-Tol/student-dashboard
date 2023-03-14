// filter students function
function FilterStudents(props) {
  return (
    <div className="container-checkbox">
      <input
        type="checkbox"
        className="checkbox-student"
        id={props.name}
        checked={props.checked}
        onChange={() => props.handleChange(props.name)}
      />
      <label htmlFor={props.name}>{props.name}</label>
    </div>
  );
}

export default FilterStudents;
