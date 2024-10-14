import { useState } from "react";
import "./Checker.css";

export default function Checker() {
  const [color, setColor] = useState("white");
  const [inputValue, setInputValue] = useState("");
  const [criteria, setCriteria] = useState("name");

  const applyColor = (e) => {
    setInputValue(e.target.value);
    if (criteria === "name") {
      setColor(e.target.value);
    } else {
      setColor(`#${e.target.value}`);
    }
  };

  const resetInput = (e) => {
    setInputValue("");
  }

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

  return (
    <div className="checker">
      <div className="shower" style={{ backgroundColor: color }}></div>
      <div className="searcher">
        <input onChange={applyColor} value={inputValue}></input>
        <button className="reset" onClick={resetInput}>reset</button>
      </div>
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
    </div>
  );
}
