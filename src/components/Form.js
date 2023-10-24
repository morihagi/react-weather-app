const Form = (props) => {
  return(
    <form>
      <input type="text" name="city" placeholder="city" onChange={e => props.setCity(e.target.value)} />
      <button type="submit" onClick={props.getWeather}>Get Weather</button>
    </form>
  );
};

export default Form;
