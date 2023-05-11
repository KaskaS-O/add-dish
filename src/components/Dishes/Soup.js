import { StyledInputRange, StyledDatalist } from "./style";

const Soup = (props) => {
  let options = [];
  for (let i = 0; i <= 10; i++) {
    options.push(<option key={i} value={i} label={i}></option>);
  }

  return (
    <>
      <label htmlFor="spiciness_scale">Spiciness:</label>
      <StyledInputRange
        type="range"
        name="spiciness_scale"
        id="spiciness_scale"
        onChange={props.onChange}
        min="0"
        max="10"
        step="1"
        defaultValue={0}
        list="markers"
        required
      />
      <StyledDatalist id="markers">{options}</StyledDatalist>
    </>
  );
};

export default Soup;
