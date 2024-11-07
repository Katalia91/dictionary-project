import React from "react";
import "./Meaning.scss";
import Synonyms from "../Synonyms/Synonyms";

export default function Meaning({ meaning }) {
  console.log("This is meaning", meaning);
  const partOfSpeech = meaning.partOfSpeech;
  return (
    <li className="meaning">
      <div className={`part-of-speech-wrapper ${partOfSpeech}`}>
        <div className="part-of-speech">{meaning.partOfSpeech}</div>
      </div>

      {!!meaning.definition && (
        <div className="definition-wrapper">
          <span>Definition: </span>
          <span>{meaning.definition}</span>
        </div>
      )}
      {!!meaning.example && (
        <div className="example-wrapper">
          <span>Example: </span>
          <span>{meaning.example}</span>
        </div>
      )}
      {!!meaning.synonyms && <Synonyms synonyms={meaning.synonyms} />}
    </li>
  );
}
