// sort values function
function SortValues(props) {
  return (
    <select
      className="sorter"
      onChange={(e) => props.handleValue(e.target.value)}
    >
      <option value="default">Default</option>
      <option value="difficulty-high-low">Difficulty High-Low</option>
      <option value="difficulty-low-high">Difficulty Low-High</option>
      <option value="fun-high-low">Fun High-Low</option>
      <option value="fun-low-high">Fun Low-High</option>
    </select>
  );
}

export default SortValues;
