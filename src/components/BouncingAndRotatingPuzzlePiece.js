import React from "react";
import PuzzlePiece from "./PuzzlePiece";

export default function BouncingAndRotatingPuzzlePiece() {
  return (
    <div
      style={{ position: "relative", width: "600px", height: "600px" }}
    >
        <PuzzlePiece primary="red" secondary="blue" ballcolor="grey"/>
    </div>
  );
}
