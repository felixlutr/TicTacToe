import React from "react";
import "./style.css";
import circle_icon from "./images/vecteezy_glowing-circle-frame_19044760.png";
import cross_icon from "./images/vecteezy_geometric-design-element_21048529.png";

function App() {
  return (
    <div className="container">
      <h1 className="gameTopic">TicTacToe</h1>
      <div className="board">
        <div className="row1">
          <div className="boxes"></div>
          <div className="boxes"></div>
          <div className="boxes"></div>
        </div>
        <div className="row2">
          <div className="boxes"></div>
          <div className="boxes"></div>
          <div className="boxes"></div>
        </div>
        <div className="row3">
          <div className="boxes"></div>
          <div className="boxes"></div>
          <div className="boxes"></div>
        </div>
      </div>
      <button type="button" className="btn">
        Reset
      </button>
    </div>
  );
}

export default App;
