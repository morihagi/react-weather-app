const Form = ({ city, setCity, getWeather }) => {
  return(
    <form onSubmit={getWeather}>
      <input type="text" name="city" placeholder="city" onChange={e => setCity(e.target.value)} />
      <button type="submit">Get Weather</button>
    </form>
  );
};

export default Form;
