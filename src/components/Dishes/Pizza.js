const Pizza = (props) => {
  return (
    <>
      <label htmlFor="no_of_slices">Number of slices:</label>
      <input
        type="number"
        name="no_of_slices"
        id="no_of_slices"
        onChange={props.onChange}
        min="0"
        step="1"
        max="30"
        required
      />
      <label htmlFor="diameter">Diameter (in cm):</label>
      <input
        type="number"
        name="diameter"
        id="diameter"
        onChange={props.onChange}
        min="10"
        step="0.1"
        max="100"
        required
      />
    </>
  );
};

export default Pizza;
