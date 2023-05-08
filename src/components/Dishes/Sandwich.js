const Sandwich = (props) => {
  return (
    <>
      <label htmlFor="slices_of_bread">Slices of bread required:</label>
      <input
        type="number"
        name="slices_of_bread"
        id="slices_of_bread"
        onChange={props.onChange}
        min="0"
        step="1"
        max="10"
        required
      />
    </>
  );
};

export default Sandwich;
