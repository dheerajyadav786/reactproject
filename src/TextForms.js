import React, { useState } from "react";

export default function TextForms(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  };
  const handleLoClickClear = () => {
    let newText = "";
    setText(newText);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="text"
            value={text}
            rows="5"
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "black" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
          <div className="mt-5">
            <button className="btn btn-primary" onClick={handleUpClick}>
              Convert to Uppercase
            </button>
            <button className="btn btn-primary ms-3" onClick={handleLoClick}>
              Convert to Lowercase
            </button>
            <button
              className="btn btn-primary ms-3"
              onClick={handleLoClickClear}
            >
              Clear
            </button>
          </div>
        </div>

        <div className="container my-5">
          <h2>Your Text Summary</h2>
          <p>
            {
              text.split("/s+/").filter((element) => {
                return element.length !== 0;
              }).length
            }
            words and {text.length} Character
          </p>
          <p>{0.008 * text.split(" ").length} Minutes to read</p>
          <h2>Preview</h2>
          <p>{text.length > 0 ? text : "Enter something to preview here"}</p>
        </div>
        {/* <button className="btn btn-primary" onClick={handleLoClickClear}>
        Clear
      </button> */}
      </div>
    </>
  );
}
