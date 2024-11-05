import React from "react";
import "./Meaning.scss";
import Synonyms from "../Synonyms/Synonyms";

export default function Meaning({ meaning }) {
  console.log(meaning);
  return (
    <div className="meaning">
      <div className="part-of-speech">{meaning.partOfSpeech}</div>
      {!!meaning.definition && (
        <div className="definition-wrapper">
          <span>Definition: </span>
          <span>{meaning.definition}</span>
        </div>
      )}
      {!!meaning.example && (
        <div className="exmaple-wrapper">
          <span>Example: </span>
          <span>{meaning.example}</span>
        </div>
      )}
      {!!meaning.synonyms && <Synonyms synonyms={meaning.synonyms} />}
    </div>
  );
}
