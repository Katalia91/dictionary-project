import React from "react";
import Meaning from "../Meaning/Meaning";

export default function Results({ results }) {
  if (results) {
    return (
      <div className="Results">
        <p>You searched for: {results.word}</p>
        {results.meanings.map((meaning, index) => (
          <Meaning meaning={meaning} />
        ))}
      </div>
    );
  } else {
    // if we haven't searched for anything, it will by default return nothing
    return null;
  }
}
