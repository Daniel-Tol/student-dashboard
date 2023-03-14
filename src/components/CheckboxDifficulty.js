// checkbox difficulty function
function CheckboxDifficulty(props) {
  return (
    <div className="container-checkbox">
      <input
        type="checkbox"
        className="checkbox-difficulty"
        id="checkbox-difficulty"
        checked={props.checked}
        onChange={() => props.handleChange()}
      />
      <label htmlFor="checkbox-difficulty">How difficult?</label>
    </div>
  );
}

export default CheckboxDifficulty;
