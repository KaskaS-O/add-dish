const Soup = (props) => {
  let options = [
    <option key="default" value="">
      Please select spiciness value
    </option>,
  ];
  for (let i = 0; i <= 10; i++) {
    options.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }

  return (
    <>
      <label htmlFor="spiciness_scale">Spiciness:</label>
      <select
        name="spiciness_scale"
        id="spiciness_scale"
        onChange={props.onChange}
        required
      >
        {options}
      </select>
    </>
  );
};

export default Soup;
