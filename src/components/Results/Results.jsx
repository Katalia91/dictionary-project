import React from "react";
import Meaning from "../Meaning/Meaning";
import "./Results.scss";

export default function Results({ results }) {
  if (results) {
    const order = ["noun", "verb", "adjective"];

    // Sort the meanings based on the order of parts of speech
    const sortedMeanings = [...results.meanings].sort((a, b) => {
      return order.indexOf(a.partOfSpeech) - order.indexOf(b.partOfSpeech);
    });

    return (
      <div className="results-wrapper">
        <div className="word">
          <div>{results.word}</div>
          <div>/{results.phonetic}/</div>
        </div>
        <div></div>
        <ul className="results">
          {sortedMeanings.map((meaning, index) => (
            <Meaning key={index} meaning={meaning} />
          ))}
        </ul>
      </div>
    );
  } else {
    // if we haven't searched for anything, it will by default return nothing
    return null;
  }
}
