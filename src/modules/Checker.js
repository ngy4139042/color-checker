import { useState } from "react";
import "./Checker.css";
import Radios from "./Radios";

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

  

  return (
    <div className="checker">
      <div className="shower" style={{ backgroundColor: color }}></div>
      <div className="searcher">
        <input onChange={applyColor} value={inputValue}></input>
        <button className="reset" onClick={resetInput}>reset</button>
      </div>
      <Radios setColor={setColor} setCriteria={setCriteria} setInputValue={setInputValue}></Radios>
    </div>
  );
}
