import React from "react";
import PuzzlePiece from "./components/PuzzlePiece";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <PuzzlePiece
          primaryColor="#004973" // color of stator
          secondaryColor="#03ae9f" // color of rotator
          ballColor="#e8e8e8" // color of ball
          thickness={8} // thhikcness
          bouncingTime={0.6} // bouncingTime
          length={240}
          slideOutDistance1={40} // top-left piece
          slideOutDistance2={40} // bottom-right piece
          rotationAngle={12} // Rotation angle deg: counter clockwise
          bouncingAngle={0} // Bouncing Angle 33 deg or 45 deg (0~ 90) =====================< Edited
          entireRotatedAngle={90} // Entire Ratated Angle in (0, 90) ======================< Edited
        />
      </div>
    </div>
  );
}

export default App;
