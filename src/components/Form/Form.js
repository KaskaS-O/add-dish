const Form = () => {
  return (
    <form>
      <label for="name">Name:</label>
      <input type="text" name="name" id="name" />
      <label for="preparation_time">Preparation time:</label>
      <input
        type="time"
        name="preparation_time"
        id="preparation_time"
        value="00:00:00"
        step="1"
      />
      <label for="dish_type">Type:</label>
      <select name="dish_type" id="dish_type">
        <option value="">Please select a dish type</option>
        <option value="pizza">Pizza</option>
        <option value="soup">Soup</option>
        <option value="sandwich">Sandwich</option>
      </select>
    </form>
  );
};

export default Form;
