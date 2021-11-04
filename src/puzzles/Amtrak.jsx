var prompt =
  "Another secret member of your Spy society... Abraham Lincoln visited this location in Poughkeepsie twice. Once alive, once dead...";
var answers = ["Amtrak"];

function Amtrak(props) {
  const [solved, setSolved] = useState(false);

  const handleSubmit = evt => {
    evt.preventDefault();

    if (answers.includes(location)) {
      setSolved(true);
    }
  };

  return (
    <div>
      <p> {prompt} </p>
      <form hidden={solved} onSubmit={handleSubmit}>
        <label>
          Location:
          <input
            type="text"
            value={location}
            onChange={e => setLocation(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <form hidden={!solved} onSubmit={handleNext}>
        Meet me at the location for your next clue! I'd recommend driving.
        <input value="Next" type="submit" />
      </form>
    </div>
  );
}
export default Amtrak;
