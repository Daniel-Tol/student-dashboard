// checkbox fun function
function CheckboxFun(props) {
  return (
    <div className="container-checkbox">
      <input
        type="checkbox"
        className="checkbox-fun"
        id="checkbox-fun"
        checked={props.checked}
        onChange={() => props.handleChange()}
      />
      <label htmlFor="checkbox-fun">How fun?</label>
    </div>
  );
}

export default CheckboxFun;
