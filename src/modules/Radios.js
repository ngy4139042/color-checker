import './Radios.css';

export default function Radios({setColor, setCriteria, setInputValue}) {
  const changeCriteria = (e) => {
    if (e.target.className === "critName") {
      setCriteria("name");
      setColor("white");
      setInputValue("");
    } else {
      setCriteria("hex");
      setColor("white");
      setInputValue("");
    }
  };

  return(
  <div>
    <label>
      <input
        type="radio"
        name="color"
        className="critName"
        onChange={changeCriteria}
        defaultChecked
      ></input>
      <span>name</span>
    </label>
    <label>
      <input
        type="radio"
        name="color"
        className="critHex"
        onChange={changeCriteria}
      ></input>
      <span>hex</span>
    </label>
  </div>
  );
}