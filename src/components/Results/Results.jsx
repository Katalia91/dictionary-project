import React from "react";
import Meaning from "../Meaning/Meaning";

export default function Results({ results }) {
  if (results) {
    return (
      <div className="results">
        <div>You searched for: {results.word}</div>
        <ul>
        {results.meanings.map((meaning, index) => (
        <li key={index} >
          <Meaning meaning={meaning} />
        </li>
        ))}
        </ul>
      </div>
    );
  } else {
    // if we haven't searched for anything, it will by default return nothing
    return null;
  }
}
