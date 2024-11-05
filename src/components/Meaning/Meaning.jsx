import React from "react";
import "./Meaning.scss";

export default function Meaning({ meaning }) {
  console.log(meaning);
  return (
    <div className="meaning">
      <div className="part-of-speech">{meaning.partOfSpeech}</div>
      {!!meaning.definition && <div>Definition: {meaning.definition}</div>}
      {!!meaning.example && <div>Example: {meaning.example}</div>}
    </div>

  )
}
