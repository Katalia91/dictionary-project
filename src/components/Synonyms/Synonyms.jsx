import React from "react";
import "./Synonyms.scss";

export default function Synonyms({ synonyms }) {
  return (
    <div>
      <ul className="synonyms">
        {synonyms.map((synonym, index) => (
          <li key={index} className="synonym">
            {synonym}
          </li>
        ))}
      </ul>
    </div>
  );
}
